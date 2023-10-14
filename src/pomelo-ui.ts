import { App, Plugin } from 'vue'
import * as components from './components'
import version from './version'

const PomeloUI = {
  // 组件库版本号
  version,
  install: (app: App) => {
    Object.keys(components).forEach(key => {
      const Component = components[key as keyof typeof components]
      if ('install' in Component || typeof Component === 'function') {
        app.use(Component as Plugin)
      }
    })
  }
}

export default PomeloUI