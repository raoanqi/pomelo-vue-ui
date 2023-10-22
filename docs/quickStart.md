# 快速开始

## 环境支持

* Pomelo-UI基于[Vue 3](https://vuejs.org/)进行开发，由于Vue 3官方宣布不再支持IE 11, Pomelo-UI也不再支持IE浏览器
* Vue.js版本>=3.3.+

## 版本

Pomelo-UI目前正处于开发初期，正处于快速迭代开发阶段。

## 使用包管理器进行安装

您可以使用包管理器（如[npm](https://www.npmjs.com/)、[yarn](https://yarnpkg.com/)、[pnpm](https://pnpm.io/)）来安装Pomelo-UI

```bash
# npm
npm install pomelo-vue-ui
# yarn
yarn add pomelo-vue-ui
# pnpm
pnpm install pomelo-vue-ui
```

## 用法

### 完整引入

如果您对打包后的文件大小并不在意，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from 'vue'
import PomeloUI from 'pomelo-vue-ui'
import App from './App.vue'

const app = createApp(App)
app.use(ArcoVue)
app.mount('#app')
```
