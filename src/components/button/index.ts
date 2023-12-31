import { App } from 'vue'
import { installComponent } from '../../install'
import { PomeloOptions } from '../../utils/type'
import Button from './src/button.vue'

export { Button }

export default {
  install(app: App, options?: PomeloOptions) {
    installComponent(app, Button, options)
  }
}
