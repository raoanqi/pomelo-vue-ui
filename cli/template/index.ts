/**
 * 创建组件核心tsx文件模板
 */

// todo:后续换成lodash
import { upperFirst } from './utils'

const genIndexTemplate = (name: string) => {
  // 组件名称
  const compName = upperFirst(name)
  return `\
import {App} from 'vue'
import { installComponent } from '../../install'
import { PomeloUIOptions } from '../../utils/global-config'
import ${compName} from './src/${name}'

//具名导出
export {${compName}}

//导出插件
export default {
  install(app: App, options?: PomeloUIOptions) {
    installComponent(app, ${compName}, options)
  }
}
  `
}

export default genIndexTemplate
