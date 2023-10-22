import { App } from 'vue'
import { installComponent } from '../../install'
import { PomeloUIOptions } from '../../utils/global-config'
import Alert from './src/alert.vue'

//具名导出
export { Alert }

//导出插件
export default {
  install(app: App, options?: PomeloUIOptions) {
    installComponent(app, Alert, options)
  }
}
