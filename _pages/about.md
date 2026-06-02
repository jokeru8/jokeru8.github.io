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

### ELAN4D — CoRL 2026 在投

面向 VLA 策略在分布外场景鲁棒性不足的问题，提出 embodiment-centric 4D 监督训练框架，通过即插即用辅助分支增强策略对未来动态的建模能力。
- **创新点：** 利用 URDF 与关节角正运动学生成机器人关键点 4D 轨迹，作为紧凑监督信号，无需外部 tracker 或场景重建；ControlNet 风格轻量 track decoder 注入 4D 信号，梯度隔离保护预训练 VLM，推理阶段丢弃辅助分支，不改变策略接口。
- **主要结果：** 在 LIBERO、LIBERO-Plus、RoboTwin 2.0 及真机任务上一致优于强 VLA baseline，相机、背景、布局等 OOD 扰动下提升尤为显著。
- **个人贡献：** 负责 AgileX Piper 机械臂真机部署与评估，涵盖视觉鲁棒性、空间泛化、长时序推理三类任务。

### KAM-WM — CoRL 2026 在投

面向少样本操作中静态先验（如 mask）只能定位「在哪」、无法编码接近方向的问题，提出从冻结视频世界模型中提取一阶交互先验的控制框架。
- **创新点：** 对冻结 Wan 2.2 在 t=1.0 单次前向，读取 latent velocity 作为 Kinematic Affordance Map（KAM），同时提供交互区域与粗粒度运动结构；Perceiver 压缩为 8 tokens 条件化扩散策略，无需 video rollout 或世界模型微调。
- **主要结果：** LIBERO 平均成功率 90.6%；RoboTwin 2.0 Easy/Hard 分别达 65.7% / 22.4%，相对零阶 mask prior 消融表明方向信息带来额外增益。
- **个人贡献：** 负责真机侧系统搭建与部署验证，完成基于真机图像的策略 rollout 定性验证。


项目经历
======
可视化结果：[project](/project/)


### ICRA AgiBot World Challenge - 基于 MoE 的人形机器人 （5/77）

参加 ICRA AgiBot World Challenge，面向具身智能场景中的机械臂感知、决策与操作任务，设计并实现了基于 MoE（Mixture of Experts）的多专家协同方案，最终取得第五名成绩。
- 构建面向复杂操作任务的 MoE 决策框架，将不同专家策略用于处理语义理解、目标定位、动作规划与执行控制等子问题，提升系统在多任务场景下的泛化能力与稳定性。
- 在挑战赛环境中完成方案验证，体现了方法在真实具身智能任务中的有效性与工程可落地性。

### OpenClaw 智能体机械臂系统接入

将真实机械臂接入 OpenClaw 框架，构建了基于智能体大脑的感知、决策、执行一体化系统，实现从自然语言任务理解到机械臂空间操作的闭环控制。
- 完成机械臂底层控制接口、视觉感知模块与 OpenClaw 智能体框架的系统集成，使机械臂能够根据语义指令完成目标识别、任务分解、动作规划与执行。
- 接入了SAM3、VGGT等实时感知模块，采用Qwen3.5和deepseek图像理解和推理模型。
- 在当前测试任务中实现 100% 成功率的语义理解抓取，并支持高精度空间操作，验证了智能体驱动机械臂在开放式桌面操作任务中的可行性。

### Adaptive Horizon VLA - 自适应学习可变动作块VLA

当前的 VLA 模型通常由VLM与一个策略动作头组成，两个模块之间通过隐式动作等中间变量进行信息交互。动作块与隐式动作通常采用固定长度，其长度往往由数据特征和人工设计决定，与类人行为的功能语义并不一致。
- 提出自适应时域 VLA (AH VLA) 框架。该方法结合动作量化与字节对编码（BPE），将动作量化编码并进行分词，学习具有可变时域长度的隐式动作。在推理阶段，主干网络预测这些隐式动作，再由动作头将其解码为可执行的控制序列。
- AH VLA所学习的隐式动作具备更优的可解释性。尽管其时间尺度可变，预测得到的隐式动作在运动动力学上呈现出高度的自组织特性，在整体轨迹中的功能作用清晰可辨，表明模型成功捕捉到了复杂操作行为的内在结构。

### TurbidPose - 浑浊水下环境的自适应6D位姿估计算法
针对水下场景中常见的散射导致的浑浊、颜色偏移、照度快速变化等域偏移问题，提出一种抗环境干扰的 6自由度(3D 旋转 + 3D 平移)姿态估计方法，支撑水下机器人自主作业的感知需求。
- 在自注意力层中引入特征注入机制，通过程度显式可控的风格迁移实现一种风格噪声可控的数据增强，生成具有高真实感且保留关键特征的合成训练样本，从而系统性提升模型对浑浊、照明变化的适应能力。
- 提出一种基于预训练变分自编码器（VAE）的抗干扰特征提取模块，通过潜空间特征引导姿态估计器学习更稳定的环境不变表征，增强其在不同水下条件下的适应性，降低噪声与成像退化对姿态估计的影响。

### Piper 机械臂lerobot框架部署
代码开源至GitHub: [https://github.com/jokeru8/piper_lerobot.git](https://github.com/jokeru8/piper_lerobot.git)  

本项目基于Lerobot框架在六自由度真实机械臂Piper上部署了Pi0.5、ACT等算法。实现了系统搭建与硬件适配、数据集构建、模型训练与部署全流程。
- 完成机械臂底层控制接口/通信链路适配与运动指令封装，构建统一的动作表示与状态回读机制。实现主从臂数据采集流程，采集包含视觉观测与动作序列的时序数据。
- 将采集数据用于策略模型finetune，完成从离线训练到在线推理的部署联调，支持常见桌面操作任务如pick-and-place等；采用RTC推理架构优化模型推理链路，保障机械臂操作的实时性与动作精准度。

