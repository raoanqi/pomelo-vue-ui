<template>
  <div v-if="visible" :class="classList">
    <div :class="`${componentBaseClass}-body`">
      <div v-if="title || $slots.title" :class="`${componentBaseClass}-title`">
        <slot name="title">{{ title }}</slot>
      </div>
      <div
        v-if="description || $slots.default"
        :class="`${componentBaseClass}-content`"
      >
        <slot>{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, useSlots } from 'vue'
import { computed } from 'vue'
import { getComponentBaseClass } from '../../../utils/globalConfig'
import { alertProps } from './alert'

defineOptions({
  name: 'PoAlert'
})

const props = defineProps(alertProps)
const slots = useSlots()
const componentBaseClass = getComponentBaseClass('alert')
const visible = ref(true)
const classList = computed(() => [
  componentBaseClass,
  `${componentBaseClass}-${props.type}`,
  {
    [`${componentBaseClass}-with-title`]: Boolean(slots.title || props.title),
    [`${componentBaseClass}-center`]: props.center
  }
])
</script>