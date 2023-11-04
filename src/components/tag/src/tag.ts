import { ExtractPropTypes, PropType } from 'vue'
import { TagSize, TagBgColor } from './tagPropType'

export const tagProps = {
  /**
   * tag size
   **/
  size: {
    type: String as PropType<TagSize>,
    default: () => 'medium'
  },
  /**
   * tag bgc color
   **/
  bgColor: {
    type: String as PropType<TagBgColor>,
    default: () => ''
  }
} as const

export type TagProps = ExtractPropTypes<typeof tagProps>
