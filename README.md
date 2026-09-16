# 倒置之城 · 纯前端离线 3D 游戏（开源代码版）

一个**纯前端、离线运行**的 3D 城市关卡 Demo。无需安装运行环境、无需启动服务器、无需联网下载素材——双击 `index.html` 即可在浏览器里玩。

> ⚠️ **本仓库包含的是游戏「代码」，不包含受版权限制的角色模型素材。** 详见下方「素材授权说明」。克隆本仓库后需自行准备角色模型才能看到完整角色，否则页面可加载但不会有可操作角色。

---

## 游戏简介

- 在倒置的三维城市里移动、奔跑、跳跃、配合解谜。
- 渲染基于 **Babylon.js**（Apache-2.0），部分角色动作参考 **three.js 官方动画混合示例**（MIT）。
- 全部资源打包进 `data/`，离线即可运行；浏览器需支持 WebGL。

## 操作方式

| 按键 | 动作 |
|------|------|
| `W` `A` `S` `D` | 移动 |
| `Shift` | 奔跑 |
| `空格` | 跳跃 |
| `E` | 配合 |
| `Esc` | 暂停 |
| `R` | 重新开始 |

---

## ⚠️ 素材授权说明（务必阅读）

本项目的**代码**（HTML / JS / CSS）由作者原创，以 MIT 协议开源（见 `LICENSE`）。

但 `data/` 中两套主角模型及其派生动作数据**不在本仓库内**，原因：

- 角色模型 `Mio_Neon_Revenge` / `Zoe_Neon_Revenge` 来自 open3dlab，原始授权为 **CC BY-NC-ND 4.0**，且原作者明示 *"local evaluation only; do not redistribute or publish"*（仅本地试用，禁止再分发/发布）。
- 因此作者**没有再分发授权**，不能将这些模型公开上传到 GitHub。

完整素材来源与版权声明记录在 **`素材来源.json`** 中，请自行核对。

### 想跑起来？两种办法

1. **自备模型（推荐，合规）**：获取你拥有合法使用权的角色模型，按下方「目录结构」把文件放好即可。
2. **换成免费可商用素材**：把 `game.js` 中的模型加载改为 three.js 官方 MIT 示例角色 `Soldier.glb`（https://threejs.org/examples/models/gltf/Soldier.glb ），即可零版权风险直接运行。

---

## 目录结构

```
倒置之城/
├── index.html              # 入口页面（双击打开）
├── 先看这里.txt            # 给玩家的极简上手说明
├── 素材来源.json           # 第三方素材来源与版权声明（重要）
├── Babylon-LICENSE.md      # Babylon.js 引擎授权（Apache-2.0）
├── LICENSE                 # 本项目代码授权（MIT）
├── .gitignore              # 开源发布排除规则
└── data/
    ├── game.css            # 游戏界面样式（作者原创）
    ├── game.js             # 游戏引擎与逻辑（作者原创）
    ├── offline.js          # 离线加载封装（作者原创）
    ├── artwork.js          # 界面美术/贴图逻辑（作者原创）
    ├── mio-motion.json.js  # ❌ 受限制，不入库（需自备）
    ├── zoe-motion.json.js  # ❌ 受限制，不入库（需自备）
    ├── mio.glb.js          # ❌ 受限制，不入库（需自备）
    └── zoe.glb.js          # ❌ 受限制，不入库（需自备）
```

> 标 ❌ 的文件需你自行放置到 `data/` 对应位置，`game.js` 会在加载时读取它们。

---

## 本地运行

1. 把本仓库克隆 / 下载到本地。
2. 将你自备的角色模型文件放到 `data/` 下对应文件名（`mio.glb.js`、`zoe.glb.js` 及两个 motion 文件）。
3. 双击 `index.html`，用桌面浏览器打开。
4. 首次加载角色素材需稍等，随后即可操作。

---

## 许可证

- **本项目代码**：MIT —— 见 `LICENSE`。
- **Babylon.js 引擎**：Apache-2.0 —— 见 `Babylon-LICENSE.md`。
- **角色模型等第三方素材**：各自的原始授权，见 `素材来源.json`，**不在本仓库分发**。

---

## 致谢

- [Babylon.js](https://www.babylonjs.com/) —— 3D 渲染引擎（Apache-2.0）
- [three.js](https://threejs.org/) —— 官方动画混合示例动作参考（MIT）
- 角色模型原作者及上传者（见 `素材来源.json`，**未随本仓库分发**）
