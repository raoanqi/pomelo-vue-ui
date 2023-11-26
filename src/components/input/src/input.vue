<template>
  <input :type="type" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getComponentBaseClass } from '../../../utils/globalConfig'
import { inputProps } from './input'

defineOptions({
  name: 'PoInput'
})

const props = defineProps(inputProps)
const componentBaseClass = getComponentBaseClass('input')
const outerClassList = computed(() => [
  `${componentBaseClass}-outer`,
  `${componentBaseClass}-outer-size-${mergedSize.value}`,
  {
    [`${componentBaseClass}-outer-has-suffix`]: Boolean(slots.suffix),
    [`${componentBaseClass}-outer-disabled`]: mergedDisabled.value
  }
])
const wrapperClassList = computed(() => [
  `${componentBaseClass}-wrapper`,
  {
    [`${componentBaseClass}-error`]: mergedError.value,
    [`${componentBaseClass}-disabled`]: mergedDisabled.value,
    [`${componentBaseClass}-focus`]: focused.value
  }
])
const contentClassList = computed(() => [
  componentBaseClass,
  `${componentBaseClass}-size-${mergedSize.value}`
])
</script>