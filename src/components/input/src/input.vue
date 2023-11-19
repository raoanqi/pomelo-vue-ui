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
</script>
