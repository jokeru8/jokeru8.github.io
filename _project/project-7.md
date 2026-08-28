---
title: "Robo-annotate：具身智能半自动标注引擎｜GitHub"
collection: project
---

**Robo-annotate** 是面向具身智能数据的开放式半自动标注引擎，支持 LeRobot v2.1 数据集与 Qwen3.8-27B 两阶段推理，将机器人视频标注从「模型猜一次」变为可检查、可恢复、可发布的工程流程。项目已开源至 [GitHub](https://github.com/jokeru8/Robo-annotate)。

- 实现两阶段自动标注：整集稀疏粗定位 + 多相机高密度边界精修，结合主视角与腕部相机联合判断动作切换。
- 采用模板约束输出与确定性硬约束校验，低置信度或证据冲突的 episode 自动进入 `needs_review`，避免静默发布错误标注。
- 内置本地 Web 复核台，支持多路视频同步播放、逐帧移动、拖拽边界与人工接管，并保留来源指纹与审计记录。
- 标注阶段只读源数据，支持 episode 级可恢复批处理；通过 `convert` / `validate` 安全发布到新 LeRobot 数据集。
- 同时支持 `complete` 与 `dagger_patch` 两种模式，可覆盖完整任务轨迹与 DAgger 中途修正数据。

<div style="display: flex; gap: 50px; align-items: flex-start; flex-wrap: wrap; justify-content: center;">
  <div style="flex: 1; min-width: 300px;">
    <h3>复核台</h3>
    <img src="{{ site.baseurl }}/images/robo_annotate_review_console.webp" alt="Robo-annotate 多相机复核台" style="width: 100%; border-radius: 4px;">
  </div>
  <div style="flex: 1; min-width: 300px;">
    <h3>标注效果</h3>
    <img src="{{ site.baseurl }}/images/robo_annotate_annotation_result.webp" alt="Robo-annotate 子任务边界标注效果" style="width: 100%; border-radius: 4px;">
  </div>
</div>
