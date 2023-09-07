/**
 * 创建组件核心tsx文件模板
 */

// todo:后续换成lodash
import { upperFirst } from './utils'

const genCoreTemplate = (name: string) => {
  // 组件名称
  const compName = `P${upperFirst(name)}`
  // 类型名称
  const propsTypeName = `${upperFirst(name)}Props`
  // props名称
  const propsName = `${name}Props`
  // 文件名称
  const propsFileName = `${name}-types.ts`
  // 类名称
  const className = `p-${name}`
  return `\
import { defineComponent, toRefs } from 'vue'
import { ${propsName}, ${propsTypeName} } from './${propsFileName}'
export default defineComponent({
  name: '${compName}',
  props: ${propsName},
  setup(props: ${propsTypeName}) {
    return () => {
      return (
        <div class="${className}"></div>
      )
    }
  }
})
  `
}

export default genCoreTemplate
