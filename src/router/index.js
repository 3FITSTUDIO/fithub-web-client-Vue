import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import DashboardView from '../views/DashboardView'
import AddWeightView from '../views/AddWeightView'
import AddCaloriesView from '../views/AddCaloriesView'
import ProgressMeasurementsView from '../views/ProgressMeasurementsView'
import ProgressCaloriesView from '../views/ProgressCaloriesView'
import ProgressWeightsView from '../views/ProgressWeightsView'
import AccountEditionView from '../views/AccountEditionView'
import ProgressTrainingsView from '../views/ProgressTrainingsView'
import NotificationsView from '../views/NotificationsView'

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
    path: '/progressMeasurements',
    name: 'ProgressMeasurements',
    component: ProgressMeasurementsView
  },
  {
    path: '/progressTrainings',
    name: 'Progresstrainings',
    component: ProgressTrainingsView
  },
  {
    path: '/account',
    name: 'AccountEditionView',
    component: AccountEditionView
  },
  {
    path: '/notifications',
    name: 'NotificationsView',
    component: NotificationsView
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
