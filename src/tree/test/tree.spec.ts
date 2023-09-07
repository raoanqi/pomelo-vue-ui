import { render } from '@testing-library/vue'
import Tree from '../src/tree.tsx'
describe('tree组件测试', () => {
  test('tree基础测试', async () => {
    const { getByRole } = render(Tree)
    getByRole('tree')
  })
})
  