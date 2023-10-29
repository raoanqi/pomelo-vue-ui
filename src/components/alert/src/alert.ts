import { ExtractPropTypes, PropType } from 'vue'
import type { AlertType, AlertClosable, AlertCenter } from './alertPropType'

export const alertProps = {
  /**
   * title
   **/
  title: {
    type: String,
    default: () => 'Title'
  },
  /**
   * description
   **/
  description: {
    type: String,
    default: () => 'This is description'
  },
  /**
   * type
   **/
  type: {
    type: String as PropType<AlertType>,
    default: () => 'info'
  },
  /**
   * closable
   **/
  closable: {
    type: Boolean as PropType<AlertClosable>,
    default: () => true
  },
  /**
   * place content in center
   **/
  center: {
    type: Boolean as PropType<AlertCenter>,
    default: () => false
  }
} as const
export type AlertProps = ExtractPropTypes<typeof alertProps>

export const alertEmits = {
  close: (event: MouseEvent) => event instanceof MouseEvent
}
export type AlertEmits = typeof alertEmits
