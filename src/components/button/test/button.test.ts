import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import Button from '../src/button.vue'

describe('Button Test', () => {
  test('create', () => {
    const wrapper = mount(Button)
    expect(wrapper.findComponent(Button).exists()).toBe(true)
  })

  test('default slot text', () => {
    const wrapper = mount(Button)
    expect(wrapper.text()).toBe('Button')
  })

  test('type', () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).toContain('p-btn-primary')
  })

  test('disabled', async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    })
    expect(wrapper.classes()).toContain('p-btn-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
