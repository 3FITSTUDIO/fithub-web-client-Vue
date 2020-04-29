import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: new URL('http://localhost:3000/'),
    isLoggedIn: false,
    secretToken: 'token123',
    login: '',
    password: '',
    userId: null,
    accessDenied: false
  },
  mutations: {
    logData (state) {
      console.log(state.login)
      console.log(state.password)
    },
    signIn (state) {
      state.isLoggedIn = true
    },
    signOut (state) {
      state.isLoggedIn = false
    }
  },
  actions
})
