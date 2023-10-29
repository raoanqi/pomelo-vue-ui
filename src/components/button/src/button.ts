import { ExtractPropTypes, PropType } from 'vue'
import {
  ButtonType,
  ButtonSize,
  ButtonDisabled,
  ButtonShape,
  ButtonStatus,
  ButtonHtmlAttr
} from './buttonPropType'

export const buttonProps = {
  /**
   * button type
   **/
  type: {
    type: String as PropType<ButtonType>,
    default: () => 'primary'
  },
  /**
   * button size
   **/
  size: {
    type: String as PropType<ButtonSize>,
    default: () => 'medium'
  },
  /**
   * button disabled
   **/
  disabled: {
    type: Boolean as PropType<ButtonDisabled>,
    default: () => false
  },
  /**
   * button shape
   **/
  shape: {
    type: String as PropType<ButtonShape>,
    default: () => 'square'
  },
  /**
   * button status
   **/
  status: {
    type: String as PropType<ButtonStatus>,
    default: () => 'normal'
  },
  /**
   * button htmlType
   * button标签的原生属性，button,submit,reset
   **/
  htmlTypeAttr: {
    type: String as PropType<ButtonHtmlAttr>,
    default: () => 'button'
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export const buttonEmits = {
  click: (event: MouseEvent) => event instanceof MouseEvent
}

export type ButtonEmits = typeof buttonEmits
