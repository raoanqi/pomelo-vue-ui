// 引入组件，批量导出
import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'

// 导出组件
export { Button }

// 导出一个vue插件
const componentPlugins = [ButtonPlugin]
export default {
  install(app: App) {
    componentPlugins.forEach(plugin => app.use(plugin))
  }
}
