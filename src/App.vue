<template>
  <div id="app">
    <NavigationBar/>
    <div id="nav" class="nav">
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style lang="scss" >
</style>
