/**
 * 创建组件类型声明模板
 */

// todo:后续换成lodash
import { upperFirst } from './utils'

const genTypesTemplate = (name: string) => {
  // 属性类型声明
  const propsTypeName = `${upperFirst(name)}Props`
  // 属性声明
  const propsName = `${name}Props`
  return `\
import { ExtractPropTypes, PropType } from "vue";
export const ${propsName} = {} as const
export type ${propsTypeName} = ExtractPropTypes<typeof ${propsName}>
  `
}

export default genTypesTemplate
