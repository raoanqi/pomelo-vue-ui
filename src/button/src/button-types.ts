// 约束button中的props
import { ExtractPropTypes, PropType } from 'vue'

export type ButtonType = 'primary' | 'secondary' | 'text'

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'primary'
  }
} as const

// 这里的作用是将buttonProps中的类型提取出来，然后赋值给ButtonProps
// todo
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
