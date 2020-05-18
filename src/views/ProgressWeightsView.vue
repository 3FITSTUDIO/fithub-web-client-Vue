<template>
  <ProgressDiv :array-data="weightsData" :type-of-data="typeOfData" :label-description="labelDescription"/>
</template>

<script>
import ProgressDiv from '../components/ProgressDiv'
import { mapState } from 'vuex'

export default {
  name: 'ProgressWeightsView',
  data () {
    return {
      typeOfData: 'Weight',
      labelDescription: 'Weight at date'
    }
  },
  components: { ProgressDiv },
  computed: mapState({
    weightsData: state => state.weightsData
  })
}
</script>

<style scoped>

</style>
