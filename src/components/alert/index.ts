import { App } from 'vue'
import { installComponent } from '../../install'
import { PomeloOptions } from '../../utils/type'
import Alert from './src/alert.vue'

export { Alert }

export default {
  install(app: App, options?: PomeloOptions) {
    installComponent(app, Alert, options)
  }
}
