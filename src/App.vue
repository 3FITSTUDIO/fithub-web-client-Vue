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
// import LoginView from './views/LoginView'
// import DoughnutChart from './components/DoughnutChart'
// import LoginView from './views/LoginView'
// import RegistrationView from './views/RegistrationVi

export default {
  name: 'App',
  components: {
    // RegistrationView,
    // LoginView,
    NavigationBar
  }
}
</script>

<style lang="scss" >
</style>
