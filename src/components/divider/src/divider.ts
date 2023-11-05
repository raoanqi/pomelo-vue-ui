import { ExtractPropTypes, PropType } from 'vue'
import {
  DividerDirection,
  DividerBorder,
  DividerContentPosition
} from './dividerPropType'

export const dividerProps = {
  /**
   * divider direction
   **/
  direction: {
    type: String as PropType<DividerDirection>,
    default: () => 'horizontal'
  },
  /**
   * divider border style
   **/
  border: {
    type: String as PropType<DividerBorder>,
    default: () => 'solid'
  },
  /**
   * divider content location
   **/
  contentPosition: {
    type: String as PropType<DividerContentPosition>,
    default: () => 'center'
  }
}

export type DividerProps = ExtractPropTypes<typeof dividerProps>
