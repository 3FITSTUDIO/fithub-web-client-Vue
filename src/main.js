import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'chart.js'
import 'hchs-vue-charts'
import 'vue-chartjs'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'
import './assets/css/style.css'

// Install BootstrapVue
Vue.use(BootstrapVue, window.VueCharts)

new Vue({
  router,
  store,
  beforeCreate () {
    this.$store.commit('initialiseStore')
  },
  render: h => h(App)
}).$mount('#app')
