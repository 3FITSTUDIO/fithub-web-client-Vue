import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    secretToken: 'token123'
  },
  mutations: {
    signIn (state) {
      state.isLoggedIn = true
    },
    signOut (state) {
      state.isLoggedIn = false
    }
  },
  actions: {
    async signIn ({ commit }, credentials) {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${credentials}`).then(data => data.json())

      console.log(result)

      commit('signIn')
    },
    signOut ({ commit }) {
      console.log('out')
      commit('signOut')
    }
  },
  modules: {
  }
})
