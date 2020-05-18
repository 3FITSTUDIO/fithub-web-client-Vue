<template>
  <ProgressDiv :array-data="caloriesData" :type-of-data="typeOfData"/>
</template>

<script>
import ProgressDiv from '../components/ProgressDiv'
import { mapState } from 'vuex'

export default {
  name: 'ProgressCaloriesView',
  data () {
    return {
      typeOfData: 'Calories'
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
