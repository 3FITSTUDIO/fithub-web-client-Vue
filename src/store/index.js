import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  actions: {
    async signIn ({ commit, state }, credentials) {
      const result = await fetch('http://localhost:3000/user').then(data => data.json())
      this.users = result
      console.log(result)
      const user = this.users.find(user =>
        user.login === state.login &&
        user.password === state.password);
      (user) ? state.userId = user.userId : state.accessDenied = true
      console.log(user)
    },
    signOut ({ commit }) {
      console.log('out')
      commit('signOut')
    }
  }
})
