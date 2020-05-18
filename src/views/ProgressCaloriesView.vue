<template>
  <ProgressDiv :array-data="caloriesData" :type-of-data="typeOfData" :label-description="labelDescription"/>
</template>

<script>
import ProgressDiv from '../components/ProgressDiv'
import { mapState } from 'vuex'

export default {
  name: 'ProgressCaloriesView',
  data () {
    return {
      typeOfData: 'Calories',
      labelDescription: 'Calories eaten'
    }
  },
  components: { ProgressDiv },
  computed: mapState({
    caloriesData: state => state.caloriesData
  })
}
</script>

<style scoped>

</style>
