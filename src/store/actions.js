export default {
  actions: {
    async signIn ({ commit, state }, payload) {
      console.log(payload.login, payload.password)
      const result = await fetch(state.url + 'user?' + new URLSearchParams({
        login: payload.login,
        password: payload.password
      }))
        .then(data => data.json())
        .catch(error => {
          console.log(error)
        })
      console.log(result)
      result.length !== 0 ? state.userId = result.userId : state.accessDenied = true
    },
    signOut ({ commit }) {
      console.log('out')
      commit('signOut')
    }
  }
}
