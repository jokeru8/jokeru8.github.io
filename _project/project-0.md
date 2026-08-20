---
title: "RealRobot-100：真机 DAgger 训练推理一体化框架"
collection: project
---

**RealRobot-100** 是一套面向真机的采集—训练—推理一体化框架：以真机 DAgger 闭环纠偏与异步推理为核心，兼容 UMI 与 ego 视角数据，落地于天机 Marvin 机械臂；在目标任务上成功率可达 **100%**。

- 搭建真机 DAgger 框架，支持在线纠偏与迭代数据回流，持续提升策略稳定性与可部署性。
- 兼容 UMI 数据格式，并在少量 UMI 样本上实现近似后训练的效果；同时支持 ego 视角，弥补 UMI 腕部相机全局信息缺失。
- 实现异步推理平滑：在 action chunk 接缝处无感切换，消除 chunk 边界卡顿，保障长程执行连贯性。
- 基于 Pinocchio 完成 IK 运动学求解与规划，并将框架适配天机 Marvin 真机，形成可复用的端到端落地闭环。

### UMI 离散夹爪

<video width="100%" controls style="border-radius: 4px;">
  <source src="{{ site.baseurl }}/images/纯umi离散夹爪.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

### 异步推理平滑

<video width="100%" controls style="border-radius: 4px;">
  <source src="{{ site.baseurl }}/images/arrange_async_infer.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>
