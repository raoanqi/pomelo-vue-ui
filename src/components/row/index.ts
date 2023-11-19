import { App } from 'vue'
import { installComponent } from '../../install'
import { PomeloOptions } from '../../utils/type'
import Row from './src/row.vue'

export { Row }

export default {
  install(app: App, options?: PomeloOptions) {
    installComponent(app, Row, options)
  }
}
