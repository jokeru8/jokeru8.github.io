---
title: "Piper LeRobot：AgileX Piper 全链路真机集成｜GitHub（110+ stars）"
collection: project
---

**Piper LeRobot** 是面向 AgileX Piper 六轴机械臂的完整 LeRobot 集成，覆盖主从遥操作、三路相机数据采集、模型训练与真机策略执行。在保留 Piper SDK/CAN 控制通道的基础上，参考 OpenPI Marvin 异步部署思路，补齐轨迹平滑、chunk 融合与真机生命周期管理。代码开源至 [GitHub](https://github.com/jokeru8/piper_lerobot)（**110+ stars**）。

- **全链路工作流**：Piper leader → follower 主从遥操作；三路 OpenCV 相机采集，输出 LeRobot Dataset v3；支持 ACT、PI0/PI0.5 训练与多卡加速。
- **统一部署层**：retime、插值、EMA、跨 chunk 融合、夹爪迟滞过滤，以及 start/home/hold 平滑退出，降低 chunk 边界抖动与夹爪误触发。
- **双模式真机推理**：本地 RTC demo（SmolVLA/PI0/PI0.5）；gRPC 远程异步推理（policy server + robot client），支持 SSH 转发分离算力与真机。
- **动作接口扩展**：默认 7 维 joint（6 轴 + 夹爪）可直接部署；预留 8 维 EEF 与可插拔 IK adapter 端口（待 Piper URDF/MJCF 验证）。

<h3>长程任务：物体连续操作</h3>
<video width="100%" controls preload="none" playsinline poster="{{ site.baseurl }}/images/拉抽屉长程_web_poster.jpg" style="border-radius: 4px;">
  <source data-src="{{ site.baseurl }}/images/拉抽屉长程_web.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

<h3>双臂操作</h3>
<video width="100%" controls preload="none" playsinline poster="{{ site.baseurl }}/images/双臂操作_web_poster.jpg" style="border-radius: 4px;">
  <source data-src="{{ site.baseurl }}/images/双臂操作_web.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>
