# 倒置之城 · 纯前端离线 3D 游戏（开源版）

一个**纯前端、离线运行**的 3D 城市关卡 Demo。无需安装运行环境、无需启动服务器、无需联网——克隆仓库后**双击 `index.html` 即可直接开玩**。

> ✅ 本仓库**开箱即玩**：角色模型已替换为可自由再分发的 [three.js Soldier.glb](https://threejs.org/examples/models/gltf/Soldier.glb)（MIT 协议），随仓库一起发布，克隆下来就能跑，不用自备任何素材。

---

## 游戏简介

- 在倒置的三维城市里移动、奔跑、跳跃、配合解谜。
- 渲染基于 **Babylon.js**（Apache-2.0）；角色动画取自 three.js 官方 Soldier 示例（MIT）。
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

## 本地运行

1. 克隆或下载本仓库。
2. **双击 `index.html`**，用桌面浏览器打开（推荐 Chrome / Edge / Firefox，需支持 WebGL）。
3. 首次加载角色素材稍等片刻，随后即可操作。结束直接关页面。

就是这么简单——无需 `npm install`、无需起服务、无需联网。

---

## 关于素材授权（重要）

本仓库所有内容均可合法再分发：

| 素材 | 来源 | 协议 |
|------|------|------|
| 游戏代码（HTML/JS/CSS） | 作者原创 | MIT（见 `LICENSE`） |
| 角色模型 `mio.glb.js` / `zoe.glb.js` | three.js `Soldier.glb` | **MIT**（three.js 示例） |
| 角色动画 `*-motion.json.js` | Soldier 原生 Idle/Run/Walk，采样为 motion 格式 | 随模型 MIT |
| 3D 引擎 | Babylon.js | Apache-2.0（见 `Babylon-LICENSE.md`） |

完整素材出处与版权声明见 **`素材来源.json`**。

> 注：本仓库早期版本曾使用受 CC BY-NC-ND 4.0 限制、原作者明示"禁止再分发"的第三方角色模型，出于合规原因已全部移除，改用具同等玩法的免费可再分发模型。

---

## 换成你自己的角色（可选）

想用自有版权的模型替换占位 Soldier？把你的 GLB 按游戏约定的骨骼命名（`Hips` / `Spine` / `Spine1` / `Neck` / `Head` / `LeftShoulder` / `RightShoulder` / `LeftUpLeg` … 标准 Mixamo 命名）导出，并生成对应的 `*-motion.json.js`（逐帧骨骼旋转 + 根骨位移），放到 `data/` 同名覆盖即可。`index.html` 中引用的资源路径为 `/__assets/mio.glb`、`/__assets/zoe.glb`、`/__assets/mio-motion.json`、`/__assets/zoe-motion.json`。

---

## 目录结构

```
倒置之城/
├── index.html              # 入口页面（双击打开）
├── 先看这里.txt            # 给玩家的极简上手说明
├── 素材来源.json           # 第三方素材来源与版权声明
├── Babylon-LICENSE.md      # Babylon.js 引擎授权（Apache-2.0）
├── LICENSE                 # 本项目代码授权（MIT）
├── .gitignore
└── data/
    ├── game.css            # 游戏界面样式（作者原创）
    ├── game.js             # 游戏引擎与逻辑（作者原创）
    ├── offline.js          # 离线加载封装（作者原创）
    ├── artwork.js          # 界面美术/贴图逻辑（作者原创）
    ├── mio.glb.js          # 角色模型（three.js Soldier，MIT）✅ 随仓库发布
    ├── zoe.glb.js          # 角色模型（three.js Soldier，MIT）✅ 随仓库发布
    ├── mio-motion.json.js  # 角色动画（Soldier 原生，MIT）✅ 随仓库发布
    └── zoe-motion.json.js  # 角色动画（Soldier 原生，MIT）✅ 随仓库发布
```

---

## 许可证

- **本项目代码**：MIT —— 见 `LICENSE`。
- **Babylon.js 引擎**：Apache-2.0 —— 见 `Babylon-LICENSE.md`。
- **角色模型与动画**：MIT（three.js 示例）—— 见 `素材来源.json`。

---

## 致谢

- [Babylon.js](https://www.babylonjs.com/) —— 3D 渲染引擎（Apache-2.0）
- [three.js](https://threejs.org/) —— Soldier 角色模型与动画参考（MIT）
