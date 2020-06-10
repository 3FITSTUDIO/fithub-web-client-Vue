<template>
  <ProgressDiv :array-data="trainingsData" :type-of-data="typeOfData" :label-description="labelDescription"/>
</template>

<script>
import ProgressDiv from '../components/ProgressDiv'
import { mapState } from 'vuex'

export default {
  name: 'ProgressTrainingsView',
  data () {
    return {
      typeOfData: 'Training',
      labelDescription: 'Calories burned'
    }
  },
  components: { ProgressDiv },
  computed: mapState({
    trainingsData: state => state.trainingsData
  }),
  methods: {
    getTrainingsData () {
      this.$store.dispatch('getArrayData', { path: 'trainings' })
    }
  }
}
</script>

<style scoped>

</style>
