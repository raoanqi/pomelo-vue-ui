import { ExtractPropTypes, PropType } from 'vue'
import { InputSize, InputReadonly, InputDisabled } from './inputPropType'

export const inputProps = {
  /**
   * input value
   **/
  modelValue: {
    type: String,
    default: () => ''
  },
  /**
   * input size
   **/
  size: {
    type: String as PropType<InputSize>,
    default: () => ''
  },
  /**
   * input readonly
   **/
  readonly: {
    type: Boolean as PropType<InputReadonly>,
    default: () => false
  },
  /**
   * input disabled
   **/
  disabled: {
    type: Boolean as PropType<InputReadonly>,
    default: () => false
  },
  /**
   * input max length
   **/
  maxLength: {
    type: Number
  },
  /**
   * input placeholder
   **/
  placeholder: {
    type: String,
    default: () => ''
  },
  /**
   * input html type
   **/
  type: {
    type: String,
    default: () => 'text'
  }
} as const
