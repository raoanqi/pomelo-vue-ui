/**
 * 创建组件单测文件模板
 */

// todo:后续换成lodash
import { upperFirst } from './utils'

const genTestTemplate = (name: string) => {
  return `\
import { render } from '@testing-library/vue'
import { describe, test } from 'vitest'
import ${upperFirst(name)} from '../src/${name}.tsx'
describe('${name}组件测试', () => {
  test('${name}基础测试', async () => {
    const { getByRole } = render(${upperFirst(name)})
    getByRole('${name}')
  })
})
  `
}

export default genTestTemplate
