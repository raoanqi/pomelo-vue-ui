import { ExtractPropTypes, PropType } from 'vue'
import { RowJustify } from './rowPropType'

export const rowProps = {
  /**
   * row tag
   **/
  tag: {
    type: String,
    default: () => 'div'
  },
  /**
   * row justify
   **/
  justify: {
    type: String as PropType<RowJustify>,
    default: () => 'start'
  }
} as const

export type RowProps = ExtractPropTypes<typeof rowProps>

