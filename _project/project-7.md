---
title: "UMI 数据采集与训练推理一体化框架"
collection: project
---

本项目基于纯 UMI 数据与相对轨迹，搭建了一套可迁移的采集—训练—推理一体化框架，验证了仅用 UMI 数据即可完成有效后训练，并在离散夹爪操作任务上取得可用效果。框架侧同时集成基于 Pinocchio 的逆运动学（IK）求解与运动规划，支撑从示教轨迹到机器人关节空间执行的闭环落地。

- 以纯 UMI 采集数据驱动策略后训练，动作以相对轨迹表示，提升跨本体迁移能力。
- 打通数据采集、模型训练与在线推理链路，形成可复用的一体化流程。
- 基于 Pinocchio 完成 IK 运动学求解与规划，将相对末端轨迹映射为可执行关节指令。

### 演示视频

<video width="100%" controls style="border-radius: 4px;">
  <source src="{{ site.baseurl }}/images/纯umi离散夹爪.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>
