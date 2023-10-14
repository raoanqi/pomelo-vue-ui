import { getCurrentInstance } from 'vue'
// 导入App类型
import type { App } from 'vue'

const CLASS_PREFIX = 's'
const GLOBAL_CONFIG_NAME = 'pomelo'
const COMPONENT_PREFIX = 'P'

export interface PomeloUIOptions {
  classPrefix?: string
  componentPrefix?: string
}

// 设置全局属性
export const setGlobalConfig = (
  app: App,
  options: PomeloUIOptions = { classPrefix: CLASS_PREFIX }
) => {
  app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
    // 空值合并运算符，如果左边没有就展开{}
    ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
    classPrefix: options.classPrefix
  }
}

// 获取组件name的prefix
export const getComponentPrefix = (options: PomeloUIOptions | undefined) => {
  return options?.componentPrefix ?? COMPONENT_PREFIX
}

// 获取组件的class
export const getComponentCls = (componentName?: string): string => {
  const instance = getCurrentInstance()
  // appContext用于访问全局配置和状态等
  const prefix =
    instance?.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]
      ?.classPrefix ?? CLASS_PREFIX
  // 如果传入了componentName，就拼接上去；否则直接返回prefix
  let res = prefix
  componentName && (res = `${prefix}-${componentName}`)
  return res
}