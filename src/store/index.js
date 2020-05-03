import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import methods from './methods'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: new URL('http://localhost:3000/'),
    isLoggedIn: false,
    isRegistrationViewUp: false,
    secretToken: 'token123',
    login: '',
    username: '',
    password: '',
    userId: null,
    accessDenied: false,
    serverError: false,
    caloriesData: null,
    sleepData: null,
    weightData: null
  },
  mutations,
  actions,
  methods
})
