(function () {
  var sources = document.querySelectorAll("video source[data-src]");
  if (!sources.length) return;

  function activate(source) {
    if (!source || !source.getAttribute("data-src")) return;
    source.setAttribute("src", source.getAttribute("data-src"));
    source.removeAttribute("data-src");
    var video = source.parentElement;
    if (video && video.tagName === "VIDEO") {
      video.load();
    }
  }

  if (!("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(sources, activate);
    return;
  }

  var observed = new WeakSet();
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var video = entry.target;
        var lazySources = video.querySelectorAll("source[data-src]");
        Array.prototype.forEach.call(lazySources, activate);
        io.unobserve(video);
      });
    },
    { rootMargin: "240px 0px", threshold: 0.01 }
  );

  Array.prototype.forEach.call(sources, function (source) {
    var video = source.parentElement;
    if (!video || video.tagName !== "VIDEO" || observed.has(video)) return;
    observed.add(video);
    io.observe(video);
  });
})();
