import { App } from 'vue'
import { installComponent } from '../../install.ts'
import { PomeloUIOptions } from '../../utils/global-config.ts'
import Button from './src/button.tsx'

// 具名导出
export { Button }

// 导出插件
export default {
  install(app: App, options?: PomeloUIOptions) {
    installComponent(app, Button, options)
  }
}
