<template>
  <transition>
    <div v-if="visible">
      <span v-if="title || $slots.title">
        <slot name="title">{{ title }}</slot>
      </span>
      <p v-if="description || $slots.default">
        <slot>{{ description }}</slot>
      </p>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineOptions({
  name: 'Alert'
})

const visible = ref(true)
</script>
