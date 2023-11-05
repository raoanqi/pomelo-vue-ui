<template>
  <div :class="wrapperClassList" :style="wrapperStyle">
    <span
      v-if="$slots.default && direction === 'horizontal'"
      :class="contentClassList"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getComponentBaseClass } from '../../../utils/globalConfig'
import { dividerProps } from './divider'

defineOptions({
  name: 'PoDivider'
})

const props = defineProps(dividerProps)
const componentBaseClass = getComponentBaseClass('divider')
const wrapperClassList = computed(() => [
  componentBaseClass,
  `${componentBaseClass}-${props.direction}`,
  props.direction === 'horizontal'
    ? { borderBottomStyle: props.direction }
    : { borderLeftStyle: props.direction }
])
const wrapperStyle = computed(() =>
  props.direction === 'horizontal'
    ? { 'border-bottom-style': props.border }
    : { 'border-left-style': props.border }
)
const contentClassList = computed(() => [
  `${componentBaseClass}-text`,
  `${componentBaseClass}-text-${props.contentPosition}`
])
</script>
