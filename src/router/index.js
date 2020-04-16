import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import DashboardView from '../views/DashboardView'
import AddWeightView from '../views/AddWeightView'
import AddCaloriesView from '../views/AddCaloriesView'
import ProgressMeasurmentsView from '../views/ProgressMeasurmentsView'
import ProgressCaloriesView from '../views/ProgressCaloriesView'
import ProgressWeightsView from '../views/ProgressWeightsView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/registration',
    name: 'Registration',
    component: RegistrationView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView
  },
  {
    path: '/addWeight',
    name: 'AddWeightView',
    component: AddWeightView
  },
  {
    path: '/addCalories',
    name: 'AddCaloriesView',
    component: AddCaloriesView
  },
  {
    path: '/progressCalories',
    name: 'ProgressCalories',
    component: ProgressCaloriesView
  },
  {
    path: '/progressWeights',
    name: 'ProgressWeights',
    component: ProgressWeightsView
  },
  {
    path: '/progressMeasurments',
    name: 'ProgressMeasurments',
    component: ProgressMeasurmentsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
