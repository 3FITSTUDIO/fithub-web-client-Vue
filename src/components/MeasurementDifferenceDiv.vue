<template>
    <span>
      (
      <span v-if="value >= 0">+</span>
      <span>{{value}}</span>
      )
    </span>
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
