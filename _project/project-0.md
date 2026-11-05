---
title: "RealRobot-100：真机 DAgger 训练推理一体化框架｜无本体 UMI 后训练"
collection: project
---

**RealRobot-100** 是面向真机的采集—训练—推理一体化框架，兼容 UMI 形式的无本体数据，支持仅使用 UMI 数据进行后训练。框架以真机 DAgger 闭环纠偏与异步推理为核心，已在天机 Marvin 和智元 G2 上实现；通过人工介入示教，目标任务成功率可达 **100%**。

- 搭建真机 DAgger 框架，支持在线纠偏与迭代数据回流，持续提升策略稳定性与可部署性。
- 支持仅使用 UMI 视角的无本体数据进行后训练。
- 实现异步推理平滑：在 action chunk 接缝处无感切换，消除 chunk 边界卡顿，保障长程执行连贯性。
- 基于 Pinocchio 完成 IK 运动学求解与规划，并将框架适配天机 Marvin 真机，形成可复用的端到端落地闭环。

### 平滑推理

<video width="100%" controls preload="none" playsinline poster="{{ site.baseurl }}/images/arrange_continuous_web_poster.jpg" style="border-radius: 4px;">
  <source data-src="{{ site.baseurl }}/images/arrange_continuous_web.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

### 无本体 UMI 后训练

<video width="100%" controls preload="none" playsinline poster="{{ site.baseurl }}/images/纯umi离散夹爪_web_poster.jpg" style="border-radius: 4px;">
  <source data-src="{{ site.baseurl }}/images/纯umi离散夹爪_web.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>
