<template>
  <button
    :disabled="disabled"
    :type="htmlTypeAttr"
    :class="classList"
    @click="handleClick"
  >
    <slot>Button</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getComponentBaseClass } from '../../../utils/globalConfig'
import { buttonProps, buttonEmits } from './button'

defineOptions({
  name: 'PoButton'
})

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const componentBaseClass = getComponentBaseClass('btn')
const classList = computed(() => [
  componentBaseClass,
  `${componentBaseClass}-${props.type}`,
  `${componentBaseClass}-size-${props.size}`,
  `${componentBaseClass}-shape-${props.shape}`,
  `${componentBaseClass}-status-${props.status}`,
  {
    [`${componentBaseClass}-disabled`]: props.disabled
  }
])

const handleClick = (event: MouseEvent) => {
  // 如果disabled，要阻止默认行为
  if (props.disabled) {
    return event.preventDefault()
  }
  emit('click', event)
}
</script>