<script setup lang="ts">
defineProps<{
  text: string
}>()

defineOptions({
  name: 'SaplingButton',
})
</script>
<template>
  <button class="button">{{ text }}</button>
</template>

<style scoped></style>
