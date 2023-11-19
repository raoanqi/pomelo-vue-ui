<template>
  <component :is="tag" :class="classList">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getComponentBaseClass } from '../../../utils/globalConfig'
import { rowProps } from './row'

defineOptions({
  name: 'PoRow'
})

const props = defineProps(rowProps)
const componentBaseClass = getComponentBaseClass('row')
const classList = computed(() => [])
</script>
