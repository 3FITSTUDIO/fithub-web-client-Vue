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

Neck : 40cm
Chest : 40cm
Bicep : 40cm
Forearm : 40cm
Stomach : 40cm
Waist : 40cm
Thigh : 40cm
Calf : 40cm
