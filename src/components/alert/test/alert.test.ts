import { render } from '@testing-library/vue'
import { describe, test } from 'vitest'
import Alert from '../src/alert.vue'
describe('alert组件测试', () => {
  test('alert基础测试', async () => {
    const { getByRole } = render(Alert)
    getByRole('alert')
  })
})
  