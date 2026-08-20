(function () {
  var videos = Array.prototype.slice.call(
    document.querySelectorAll("video source[data-src]")
  ).map(function (source) {
    return source.parentElement;
  }).filter(function (video, index, list) {
    return video && video.tagName === "VIDEO" && list.indexOf(video) === index;
  });

  if (!videos.length) return;

  var pending = [];
  var queued = new WeakSet();
  var activated = new WeakSet();
  var running = false;

  function preloadPosters() {
    var urls = [];
    videos.forEach(function (video) {
      var poster = video.getAttribute("poster");
      if (poster && urls.indexOf(poster) === -1) urls.push(poster);
    });

    if (!urls.length) return Promise.resolve();

    return Promise.race([
      Promise.all(
        urls.map(function (url) {
          return new Promise(function (resolve) {
            var img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = url;
          });
        })
      ),
      new Promise(function (resolve) {
        setTimeout(resolve, 3000);
      })
    ]);
  }

  function isInViewport(el) {
    var rect = el.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    return rect.bottom > 0 && rect.top < vh;
  }

  function activate(video) {
    return new Promise(function (resolve) {
      if (!video || activated.has(video)) {
        resolve();
        return;
      }

      var source = video.querySelector("source[data-src]");
      if (!source) {
        activated.add(video);
        resolve();
        return;
      }

      activated.add(video);
      source.setAttribute("src", source.getAttribute("data-src"));
      source.removeAttribute("data-src");

      var done = false;
      function finish() {
        if (done) return;
        done = true;
        video.removeEventListener("loadeddata", onReady);
        video.removeEventListener("error", onReady);
        resolve();
      }

      function onReady() {
        finish();
      }

      video.addEventListener("loadeddata", onReady);
      video.addEventListener("error", onReady);
      setTimeout(finish, 8000);

      try {
        video.load();
      } catch (e) {
        finish();
      }
    });
  }

  function enqueue(video) {
    if (!video || queued.has(video) || activated.has(video)) return;
    queued.add(video);
    pending.push(video);
    pump();
  }

  function pump() {
    if (running) return;
    running = true;

    function next() {
      if (!pending.length) {
        running = false;
        return;
      }
      var video = pending.shift();
      activate(video).then(next);
    }

    next();
  }

  function startSerialFromViewport() {
    var startIndex = 0;
    for (var i = 0; i < videos.length; i++) {
      if (isInViewport(videos[i])) {
        startIndex = i;
        break;
      }
    }

    for (var j = startIndex; j < videos.length; j++) {
      enqueue(videos[j]);
    }

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            enqueue(entry.target);
          });
        },
        { rootMargin: "120px 0px", threshold: 0.01 }
      );

      videos.forEach(function (video) {
        if (!queued.has(video) && !activated.has(video)) {
          io.observe(video);
        }
      });
    } else {
      videos.forEach(enqueue);
    }
  }

  preloadPosters().then(startSerialFromViewport);
})();
