import { App } from 'vue'
import { installComponent } from '../../install'
import { PomeloOptions } from '../../utils/type'
import Divider from './src/divider.vue'

export { Divider }

export default {
  install(app: App, options?: PomeloOptions) {
    installComponent(app, Divider, options)
  }
}
