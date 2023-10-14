import { setGlobalConfig, getComponentPrefix } from './utils/global-config'
import type { PomeloUIOptions } from './utils/global-config'
import type { App } from 'vue'

type ComponentType = any

export const installComponent = (
  app: App,
  component: ComponentType,
  options?: PomeloUIOptions
) => {
  /**
   * export interface PomeloUIOptions {
   *   classPrefix?: string
   *   componentPrefix?: string
   * }
   * options的结构中如果传入了componentprefix，就获取到对应的值
   */
  const componentPrefix = getComponentPrefix(options)
  // 检测组件是否已经注册：app.component()在只传入一个参数时，如果组件已经注册成功，会返回该组件，如果没有注册成功会返回undefined
  const registered = app.component(`${componentPrefix}${component.name}`)
  // 如果还没有注册，就调用下面的逻辑进行注册
  if (!registered) {
    setGlobalConfig(app, options)
    app.component(`${componentPrefix}${component.name}`, component)
  }
}