---
permalink: /
title: "个人主页"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
THU SIGS 硕士  
研究方向: 具身智能 机械臂 VLA  
邮箱: zhoukr25@mails.tsinghua.edu.cn  
github: [https://github.com/jokeru8](https://github.com/jokeru8)


教育经历
======
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

<style>
.education-table {
  width: auto;              /* 覆盖主题的 width: 100%，避免拉满整行 */
  border: none !important;
  border-collapse: collapse;
  margin-bottom: 1em;
  font-size: 1em
}
.education-table td {
  border: none !important;  /* 去掉单元格横线、竖线 */
  padding: 0.25em 0.5em 0.25em 0;
  text-align: left;
  vertical-align: top;
}
</style>


论文
======

### ELAN4D：Embodiment-centric 4D Supervision for Robust VLA｜CoRL 2026 在投

面向 VLA 策略在相机视角、背景、物体布局等分布外场景中鲁棒性不足的问题，参与构建 embodiment-centric 4D 监督训练框架，通过机器人自身运动轨迹监督增强策略对未来动态的建模能力。
- 利用 URDF 与关节角正运动学自动生成机器人关键点 4D 轨迹，作为无需外部 tracker 或场景重建的紧凑监督信号；通过 ControlNet 风格轻量 track decoder 注入 4D 信息，并采用梯度隔离保护预训练 VLM 表征。
- 负责 AgileX Piper 机械臂真机部署与评估，设计并完成视觉鲁棒性、空间泛化、长时序推理三类真实任务验证；方法在 LIBERO、LIBERO-Plus、RoboTwin 2.0 及真机任务中均优于强 VLA baseline，OOD 扰动下提升尤为显著。

### KAM-WM：Kinematic Affordance from Frozen Video World Model｜CoRL 2026 在投

面向少样本机器人操作中静态先验只能定位「在哪」、难以建模「如何接近」的问题，参与提出从冻结视频世界模型中提取一阶交互先验的策略学习框架。
- 基于冻结 Wan 2.2 视频世界模型，在单次前向中读取 latent velocity 并构建 Kinematic Affordance Map，同时编码交互区域与粗粒度运动方向；使用 Perceiver 将 KAM 压缩为 8 个 tokens，用于条件化扩散策略，无需 video rollout 或世界模型微调。
- 负责真机侧系统搭建与部署验证，完成基于真实机械臂观测图像的策略 rollout 定性评估；方法在 LIBERO 上平均成功率达 90.6%，RoboTwin 2.0 Easy / Hard 分别达 65.7% / 22.4%。

### Adaptive Horizon VLA - 自适应学习可变动作块 VLA｜ECCV 2026 在投

当前的 VLA 模型通常由 VLM 与一个策略动作头组成，两个模块之间通过隐式动作等中间变量进行信息交互。动作块与隐式动作通常采用固定长度，其长度往往由数据特征和人工设计决定，与类人行为的功能语义并不一致。
- 提出自适应时域 VLA (AH VLA) 框架。该方法结合动作量化与字节对编码（BPE），将动作量化编码并进行分词，学习具有可变时域长度的隐式动作。在推理阶段，主干网络预测这些隐式动作，再由动作头将其解码为可执行的控制序列。
- AH VLA 所学习的隐式动作具备更优的可解释性。尽管其时间尺度可变，预测得到的隐式动作在运动动力学上呈现出高度的自组织特性，在整体轨迹中的功能作用清晰可辨，表明模型成功捕捉到了复杂操作行为的内在结构。

### TurbidPose - 面向浑浊水下环境的自适应六自由度位姿估计算法｜RA-L 在投

针对水下场景中常见的散射导致的浑浊、颜色偏移、照度快速变化等域偏移问题，提出一种抗环境干扰的 6 自由度（3D 旋转 + 3D 平移）位姿估计方法，支撑水下机器人自主作业的感知需求。
- 在自注意力层中引入特征注入机制，通过程度显式可控的风格迁移实现一种风格噪声可控的数据增强，生成具有高真实感且保留关键特征的合成训练样本，从而系统性提升模型对浑浊、照明变化的适应能力。
- 提出一种基于预训练变分自编码器（VAE）的抗干扰特征提取模块，通过潜空间特征引导位姿估计器学习更稳定的环境不变表征，增强其在不同水下条件下的适应性，降低噪声与成像退化对位姿估计的影响。


项目经历
======
可视化结果：[project](/project/)

### RealRobot-100：真机 DAgger 训练推理一体化框架

面向真机操作任务，构建 **RealRobot-100** 采集—训练—推理一体化框架：以真机 DAgger 闭环纠偏与异步推理为核心，兼容 UMI 与 ego 视角数据，落地于天机 Marvin 机械臂，目标任务成功率可达 **100%**。
- 搭建真机 DAgger 框架，支持在线纠偏与迭代数据回流；兼容 UMI 数据格式，在少量 UMI 样本上实现近似后训练效果，同时支持 ego 视角以弥补 UMI 腕部相机全局信息缺失。
- 实现异步推理平滑，在 action chunk 接缝处无感切换、消除边界卡顿；结合 Pinocchio IK 求解与规划，完成天机 Marvin 真机适配与端到端落地。

### Piper 机械臂 lerobot 框架部署｜[GitHub](https://github.com/jokeru8/piper_lerobot)（100+ stars）

本项目基于 Lerobot 框架在六自由度真实机械臂 Piper 上部署了 Pi0.5、ACT 等算法。代码开源至 GitHub，实现了系统搭建与硬件适配、数据集构建、模型训练与部署全流程。
- 完成机械臂底层控制接口/通信链路适配与运动指令封装，构建统一的动作表示与状态回读机制。实现主从臂数据采集流程，采集包含视觉观测与动作序列的时序数据。
- 将采集数据用于策略模型 finetune，完成从离线训练到在线推理的部署联调，支持常见桌面操作任务如 pick-and-place 等；采用 RTC 推理架构优化模型推理链路，保障机械臂操作的实时性与动作精准度。

### ICRA AgiBot World Challenge｜MoE 具身智能决策方案｜Rank 5 / 77

面向多场景、多步骤具身操作任务，设计并实现基于 MoE 的多专家协同决策框架，提升系统在长流程任务中的泛化能力与稳定性。
- 针对挑战赛任务中的开放目标、复杂指令与执行不确定性，构建面向任务语义和场景状态的专家调用流程，增强系统在不同操作场景下的鲁棒性。
- 在 ICRA AgiBot World Challenge 中完成方案验证，最终取得 Rank 5 / 77，体现了方法在具身智能任务中的有效性与工程落地能力。

### 基于 OpenClaw 的长程大小脑智能体架构机械臂

将真实机械臂接入 OpenClaw 框架，将复杂任务拆解为语义理解、目标定位、动作规划与执行控制等子模块，构建从自然语言任务理解到机械臂的感知-决策-执行闭环，提升系统在长流程任务中的泛化能力与稳定性。
- 集成 SAM3、VGGT 等实时感知模块，并结合 Qwen3.5、DeepSeek 等多模态理解与推理模型，实现语义指令下的目标识别、任务分解、动作规划与执行控制。
- 在当前测试任务中实现 100% 语义理解抓取成功率，并支持高精度空间操作，验证了智能体驱动机械臂在开放式桌面操作场景中的可行性。
