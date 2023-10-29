<template>
  <transition>
    <div v-if="visible">
      <span v-if="title || $slots.title">
        <slot name="title">{{ title }}</slot>
      </span>
      <p v-if="description || $slots.default">
        <slot>{{ description }}</slot>
      </p>
      <template v-if="closable">
        <div @click="close">Close</div>
      </template>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { alertProps, alertEmits } from './alert'

defineOptions({
  name: 'PoAlert'
})

const props = defineProps(alertProps)
const emit = defineEmits(alertEmits)

const visible = ref(true)

const close = (event: MouseEvent) => {
  visible.value = false
  emit('close', event)
}
</script>
