import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import methods from './methods'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    url: new URL('http://localhost:3000/'),
    isLoggedIn: false,
    isRegistrationViewUp: false,
    secretToken: 'token123',
    login: '',
    username: '',
    userId: null,
    accessDenied: false,
    serverError: false,
    caloriesData: [],
    sleepData: [],
    weightsData: [],
    measurementsData: [],
    emailCorrect: true,
    loginCorrect: true,
    userCreated: false,
    errorWhileCreatingUser: false
  },
  mutations,
  actions,
  methods
})

store.subscribe((mutation, state) => {
  sessionStorage.setItem('store', JSON.stringify(state))
})

export default store
