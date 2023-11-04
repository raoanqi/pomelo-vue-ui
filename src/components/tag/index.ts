import { App } from 'vue'
import { installComponent } from '../../install'
import { PomeloOptions } from '../../utils/type'
import Tag from './src/tag.vue'

export { Tag }

export default {
  install(app: App, options?: PomeloOptions) {
    installComponent(app, Tag, options)
  }
}
