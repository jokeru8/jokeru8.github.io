---
permalink: /
title: "周柯儒 个人主页"
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

<div class="portfolio-hero">
  <div class="hero-identity">
    <img class="hero-avatar" src="/images/duckyo_web.jpg" alt="周柯儒" width="120" height="120" fetchpriority="high">
    <div class="hero-copy">
      <h1 class="hero-name">周柯儒</h1>
      <p class="hero-line">THU SIGS 硕士</p>
      <p class="hero-line">研究方向: 具身智能 机械臂操作 真机后训练</p>
      <div class="hero-meta">
        <a href="mailto:zhoukr25@mails.tsinghua.edu.cn">zhoukr25@mails.tsinghua.edu.cn</a>
        <a href="https://github.com/jokeru8">GitHub</a>
        <a href="/#projects">Project</a>
      </div>
    </div>
  </div>
</div>

<section id="education" class="portfolio-section" markdown="1">

## 教育经历

<table class="education-table">
  <colgroup>
    <col style="width: 13rem">
    <col style="width: 13rem">
    <col style="width: 10rem">
    <col style="width: 5rem">
  </colgroup>
  <tr>
    <td>2021.9-2025.6</td>
    <td>哈尔滨工业大学</td>
    <td>通信工程</td>
    <td>本科</td>
  </tr>
  <tr>
    <td>2025.9-至今</td>
    <td>清华大学</td>
    <td>人工智能</td>
    <td>硕士</td>
  </tr>
</table>

</section>

<section id="internship" class="portfolio-section" markdown="1">

## 实习经历

<table class="education-table">
  <colgroup>
    <col style="width: 13rem">
    <col style="width: 11rem">
    <col style="width: 12rem">
    <col style="width: 22rem">
  </colgroup>
  <tr>
    <td>2026.3-2026.6</td>
    <td>iData研究院</td>
    <td>具身算法实习生</td>
    <td>参加 ICRA AgiBot World Challenge，Rank <strong>5 / 77</strong></td>
  </tr>
  <tr>
    <td>2026.6-2026.9</td>
    <td>SotaBot</td>
    <td>世界模型算法实习生</td>
    <td>负责 π0.7 框架搭建以及完整的真机后训练部署</td>
  </tr>
</table>

</section>

<section id="papers" class="portfolio-section portfolio-section--media" markdown="1">

## 论文

<article class="entry-block" markdown="1">

### World Model-Augmented Hierarchical VLA for Long-Horizon Manipulation

面向长时序机器人操作中动作模型缺乏高层规划、未来目标与历史状态建模的问题，设计并实现世界模型增强的分层 VLA 框架，将语言任务拆解、视觉子目标生成与底层动作控制统一到闭环系统中。
- 参考 π0.7 分层框架联合训练 Cosmos 3 的 Reasoner 与 Generator，并在真机数据上微调：将任务拆解为经验分布内可执行的 subtask，预测未来 50 帧视频并抽取 5 个关键帧作为视觉 subgoal；同时从历史观测中采样关键帧构建 memory。
- 构建下游策略模型，将 task、subtask、subgoal 与 memory 共同作为策略条件；使用同构图像编码器将 memory 和 subgoal 编码为视觉 token，并通过块间注意力机制注入策略主干，实现长短程记忆增强以及语言 subtask 与视觉 subgoal 的统一条件控制。

</article>

<article class="entry-block" markdown="1">

### ELAN4D：Embodiment-centric 4D Supervision for Robust VLA｜CoRL 2026 在投

面向 VLA 策略在相机视角、背景、物体布局等分布外场景中鲁棒性不足的问题，参与构建 embodiment-centric 4D 监督训练框架，通过机器人自身运动轨迹监督增强策略对未来动态的建模能力。
- 利用 URDF 与关节角正运动学自动生成机器人关键点 4D 轨迹，作为无需外部 tracker 或场景重建的紧凑监督信号；通过 ControlNet 风格轻量 track decoder 注入 4D 信息，并采用梯度隔离保护预训练 VLM 表征。
- 负责 AgileX Piper 机械臂真机部署与评估，设计并完成视觉鲁棒性、空间泛化、长时序推理三类真实任务验证；方法在 LIBERO、LIBERO-Plus、RoboTwin 2.0 及真机任务中均优于强 VLA baseline，OOD 扰动下提升尤为显著。

### 演示视频

<video width="100%" controls preload="none" playsinline poster="{{ site.baseurl }}/images/manipulate_web_poster.jpg" style="border-radius: 4px;">
  <source data-src="{{ site.baseurl }}/images/manipulate_web.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

</article>

<article class="entry-block" markdown="1">

### KAM-WM：Kinematic Affordance from Frozen Video World Model｜CoRL 2026 在投

面向少样本机器人操作中静态先验只能定位「在哪」、难以建模「如何接近」的问题，参与提出从冻结视频世界模型中提取一阶交互先验的策略学习框架。
- 基于冻结 Wan 2.2 视频世界模型，在单次前向中读取 latent velocity 并构建 Kinematic Affordance Map，同时编码交互区域与粗粒度运动方向；使用 Perceiver 将 KAM 压缩为 8 个 tokens，用于条件化扩散策略，无需 video rollout 或世界模型微调。
- 负责真机侧系统搭建与部署验证，完成基于真实机械臂观测图像的策略 rollout 定性评估；方法在 LIBERO 上平均成功率达 90.6%，RoboTwin 2.0 Easy / Hard 分别达 65.7% / 22.4%。

<img src="{{ site.baseurl }}/images/KAM_frame.png" alt="KAM frame" style="width: 100%; border-radius: 4px;" loading="lazy">

<img src="{{ site.baseurl }}/images/KAM.png" alt="KAM" style="width: 100%; border-radius: 4px;" loading="lazy">

</article>

<article class="entry-block" markdown="1">

### Adaptive Horizon VLA - 自适应学习可变动作块 VLA｜ECCV 2026 在投

当前的 VLA 模型通常由 VLM 与一个策略动作头组成，两个模块之间通过隐式动作等中间变量进行信息交互。动作块与隐式动作通常采用固定长度，其长度往往由数据特征和人工设计决定，与类人行为的功能语义并不一致。
- 提出自适应时域 VLA (AH VLA) 框架。该方法结合动作量化与字节对编码（BPE），将动作量化编码并进行分词，学习具有可变时域长度的隐式动作。在推理阶段，主干网络预测这些隐式动作，再由动作头将其解码为可执行的控制序列。
- AH VLA 所学习的隐式动作具备更优的可解释性。尽管其时间尺度可变，预测得到的隐式动作在运动动力学上呈现出高度的自组织特性，在整体轨迹中的功能作用清晰可辨，表明模型成功捕捉到了复杂操作行为的内在结构。

<div class="ah-media">
  <div class="ah-media__col">
    <h3>技能可视化</h3>
    <img src="{{ site.baseurl }}/images/skill_web.jpg" alt="Skill Image" class="ah-media__item" loading="lazy">
  </div>
  <div class="ah-media__col">
    <h3>视频效果</h3>
    <video class="ah-media__item" controls preload="none" playsinline poster="{{ site.baseurl }}/images/skill_web_poster.jpg">
      <source data-src="{{ site.baseurl }}/images/skill_web.mp4" type="video/mp4">
      您的浏览器不支持视频标签。
    </video>
  </div>
</div>

</article>

<article class="entry-block" markdown="1">

### TurbidPose - 面向浑浊水下环境的自适应六自由度位姿估计算法｜RA-L 在投

针对水下场景中常见的散射导致的浑浊、颜色偏移、照度快速变化等域偏移问题，提出一种抗环境干扰的 6 自由度（3D 旋转 + 3D 平移）位姿估计方法，支撑水下机器人自主作业的感知需求。
- 在自注意力层中引入特征注入机制，通过程度显式可控的风格迁移实现一种风格噪声可控的数据增强，生成具有高真实感且保留关键特征的合成训练样本，从而系统性提升模型对浑浊、照明变化的适应能力。
- 提出一种基于预训练变分自编码器（VAE）的抗干扰特征提取模块，通过潜空间特征引导位姿估计器学习更稳定的环境不变表征，增强其在不同水下条件下的适应性，降低噪声与成像退化对位姿估计的影响。

### 介绍视频

<video width="100%" controls preload="none" playsinline poster="{{ site.baseurl }}/images/TurbidPose_web_poster.jpg" style="border-radius: 4px;">
  <source data-src="{{ site.baseurl }}/images/TurbidPose_web.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

</article>

</section>

<section id="projects" class="portfolio-section portfolio-section--media">
  <h2>项目经历</h2>
  {% assign projects = site.project | sort: "path" %}
  {% for post in projects %}
  <article class="showcase-item entry-block entry-block--media" id="{{ post.slug }}">
    <h3 class="showcase-item__title">{{ post.title }}</h3>
    <div class="showcase-item__body">
      {{ post.content }}
    </div>
  </article>
  {% endfor %}
</section>
