import { defineComponent, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-types.ts'

export default defineComponent({
  name: 'PButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type } = toRefs(props)
    return () => {
      // 如果用户传递了内容，则使用用户的内容，否则使用默认内容
      const defaultSlot = slots.default ? slots.default() : '按钮'
      return <button class={`p-btn p-btn--${type.value}`}>{defaultSlot}</button>
    }
  }
})
