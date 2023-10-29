import { App } from 'vue'
import { installComponent } from '../../install'
import { PomeloOptions } from '../../utils/type'
import Button from './src/button.vue'

// 具名导出
export { Button }

// 导出插件
export default {
  install(app: App, options?: PomeloOptions) {
    installComponent(app, Button, options)
  }
}
