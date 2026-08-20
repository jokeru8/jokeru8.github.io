---
title: "Piper 机械臂 lerobot 框架部署｜GitHub（100+ stars）"
collection: project
---

本项目基于 Lerobot 框架在六自由度真实机械臂 Piper 上部署了 Pi0.5、ACT 等算法。代码开源至 [GitHub](https://github.com/jokeru8/piper_lerobot)（**100+ stars**），实现了系统搭建与硬件适配、数据集构建、模型训练与部署全流程。

- 完成机械臂底层控制接口/通信链路适配与运动指令封装，构建统一的动作表示与状态回读机制。实现主从臂数据采集流程，采集包含视觉观测与动作序列的时序数据。
- 将采集数据用于策略模型 finetune，完成从离线训练到在线推理的部署联调，支持常见桌面操作任务如 pick-and-place 等；采用 RTC 推理架构优化模型推理链路，保障机械臂操作的实时性与动作精准度。

<div style="display: flex; gap: 50px; align-items: flex-start; flex-wrap: wrap; justify-content: center;">
  <div style="flex: 0 0 auto;">
    <h3>Pi05</h3>
    <video style="height: 240px; width: auto;" controls preload="none" playsinline>
      <source data-src="{{ site.baseurl }}/images/pi05_pick_and_place_web.mp4" type="video/mp4">
      您的浏览器不支持视频标签。
    </video>
  </div>
  <div style="flex: 0 0 auto;">
    <h3>Act</h3>
    <video style="height: 240px; width: auto;" controls preload="none" playsinline>
      <source data-src="{{ site.baseurl }}/images/pick_and_place_web.mp4" type="video/mp4">
      您的浏览器不支持视频标签。
    </video>
  </div>
</div>
