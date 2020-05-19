<template>
    <a>(<span v-if="value >= 0">+</span>{{value}})</a>
</template>

<script>
export default {
  name: 'MeasurementDifferenceDiv',
  props: {
    value: Number
  }
}
</script>

<style scoped>
</style>
