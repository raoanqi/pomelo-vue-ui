<template>
  <span :class="classList" :style="style">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getComponentBaseClass } from '../../../utils/globalConfig'
import { tagProps } from './tag'
import { TAG_BG_COLORS } from './tagPropType'

defineOptions({
  name: 'PoTag'
})

const props = defineProps(tagProps)
const componentBaseClass = getComponentBaseClass('tag')
// 是否传入自定义颜色
const customizeColor = computed(
  () => props.bgColor && !TAG_BG_COLORS.includes(props.bgColor)
)
const classList = computed(() => [
  componentBaseClass,
  `${componentBaseClass}-size-${props.size}`,
  {
    [`${componentBaseClass}-${props.bgColor}`]: !customizeColor.value
  }
])
const style = computed(() => {
  if (customizeColor.value) {
    return {
      backgroundColor: props.bgColor
    }
  }
  return undefined
})
</script>
