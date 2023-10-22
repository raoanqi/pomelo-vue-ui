import { defineComponent, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-types'

export default defineComponent({
  name: 'Button',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props)
    return () => {
      // 如果用户传递了内容，则使用用户的内容，否则使用默认内容
      const defaultSlot = slots.default ? slots.default() : '按钮'
      // 根据传入的block，使用对应的class
      const blockClass = block.value ? 'p-btn--block' : ''
      // 根据传入的type，使用对应的class
      // 根据传入的size，使用对应的class
      // button的disabled属性，使用disabled.value
      return (
        <button
          disabled={disabled.value}
          class={`p-btn p-btn--${type.value} p-btn--${size.value} ${blockClass}`}
        >
          {defaultSlot}
        </button>
      )
    }
  }
})
