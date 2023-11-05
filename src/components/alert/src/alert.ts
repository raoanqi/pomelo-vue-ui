import { ExtractPropTypes, PropType } from 'vue'
import type { AlertType, AlertCenter } from './alertPropType'

export const alertProps = {
  /**
   * title
   **/
  title: {
    type: String,
    default: () => ''
  },
  /**
   * description
   **/
  description: {
    type: String,
    default: () => ''
  },
  /**
   * type
   **/
  type: {
    type: String as PropType<AlertType>,
    default: () => 'info'
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
