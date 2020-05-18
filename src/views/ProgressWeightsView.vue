<template>
  <ProgressDiv :array-data="weightsData" :type-of-data="typeOfData"/>
</template>

<script>
import ProgressDiv from '../components/ProgressDiv'
import { mapState } from 'vuex'

export default {
  name: 'ProgressWeightsView',
  data () {
    return {
      typeOfData: 'Weight'
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
