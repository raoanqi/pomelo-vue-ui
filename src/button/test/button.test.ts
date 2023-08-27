import { render } from '@testing-library/vue'
import Button from '../src/button.tsx'
import { expect } from 'vitest'

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
  expect(button.classList.contains('s-btn--primary')).toBe(true)
})

test('button传入type', () => {
  const { getByRole } = render(Button, {
    props: {
      type: 'secondary'
    }
  })
  const button = getByRole('button')
  expect(button.classList.contains('s-btn--secondary')).toBe(true)
})
