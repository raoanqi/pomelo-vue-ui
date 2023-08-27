// 约束button中的props
import { ExtractPropTypes, PropType } from 'vue'

export type ButtonType = 'primary' | 'secondary' | 'text'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonDisable = true | false
export type ButtonBlock = true | false

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'primary'
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'small'
  },
  disabled: {
    type: Boolean as PropType<ButtonDisable>,
    default: false
  },
  block: {
    type: Boolean as PropType<ButtonBlock>,
    default: false
  }
} as const

// 这里的作用是将buttonProps中的类型提取出来，然后赋值给ButtonProps
// todo
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
