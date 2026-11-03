---
title: "World Model-Augmented Hierarchical VLA for Long-Horizon Manipulation"
collection: project
---

面向长时序机器人操作中动作模型缺乏高层规划、未来目标与历史状态建模的问题，设计并实现世界模型增强的分层 VLA 框架，将语言任务拆解、视觉子目标生成与底层动作控制统一到闭环系统中。
- 参考 π0.7 分层框架联合训练 Cosmos 3 的 Reasoner 与 Generator，并在真机数据上微调：将任务拆解为经验分布内可执行的 subtask，预测未来 50 帧视频并抽取 5 个关键帧作为视觉 subgoal；同时从历史观测中采样关键帧构建 memory。
- 构建下游策略模型，将 task、subtask、subgoal 与 memory 共同作为策略条件；使用同构图像编码器将 memory 和 subgoal 编码为视觉 token，并通过块间注意力机制注入策略主干，实现长短程记忆增强以及语言 subtask 与视觉 subgoal 的统一条件控制。

### 演示视频

<video width="100%" controls preload="none" playsinline poster="{{ site.baseurl }}/images/sota-wla_web_poster.jpg" style="border-radius: 4px;">
  <source data-src="{{ site.baseurl }}/images/sota-wla_web.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>
