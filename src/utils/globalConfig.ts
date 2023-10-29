import { getCurrentInstance } from 'vue'
import type { App } from 'vue'
import { CLASS_PREFIX, GLOBAL_CONFIG_NAME, COMPONENT_PREFIX } from './constant'
import { PomeloOptions } from './type'

/**
 * 设置全局属性
 **/
export const setGlobalConfig = (
  app: App,
  options: PomeloOptions = { classPrefix: CLASS_PREFIX }
) => {
  app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
    ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
    classPrefix: options.classPrefix
  }
}

/**
 * 获取组件name的prefix
 **/
export const getComponentPrefix = (options: PomeloOptions | undefined) => {
  return options?.componentPrefix ?? COMPONENT_PREFIX
}

/**
 * 生成组件的基础类名，例如p-btn
 **/
export const getComponentBaseClass = (componentName?: string): string => {
  const instance = getCurrentInstance()
  const prefix =
    instance?.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]
      ?.classPrefix ?? CLASS_PREFIX
  let res = prefix
  componentName && (res = `${prefix}-${componentName}`)
  return res
}
