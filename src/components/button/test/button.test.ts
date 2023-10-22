import { render } from '@testing-library/vue'
import { describe, test, expect } from 'vitest'
import Button from '../src/button.tsx'

describe('Button Test', () => {
  test('button基础测试', () => {
    const { getByRole } = render(Button)
    getByRole('button')
  })

  test('button默认插槽', () => {
    const { getByText } = render(Button)
    getByText('按钮')
  })

  test('button传入插槽', () => {
    const { getByText } = render(Button, {
      slots: {
        default() {
          return '确认'
        }
      }
    })
    getByText('确认')
  })

  test('button默认type', () => {
    const { getByRole } = render(Button)
    const button = getByRole('button')
    expect(button.classList.contains('p-btn--primary')).toBe(true)
  })

  test('button传入type', () => {
    const { getByRole } = render(Button, {
      props: {
        type: 'secondary'
      }
    })
    const button = getByRole('button')
    expect(button.classList.contains('p-btn--secondary')).toBe(true)
  })
})
