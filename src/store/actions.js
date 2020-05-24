import router from '../router'

export default {
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
    if (result !== undefined) {
      if (result.length !== 0) {
        state.userId = result[0].id
        state.username = result[0].first_name
        state.password = result[0].password
        state.login = result[0].login
        state.surname = result[0].last_name
        state.email = result[0].email
        state.sex = result[0].sex
        state.height = result[0].height
        state.yearOfBirth = result[0].yearOfBirth
        commit('signIn')
        await router.push('/dashboard')
      } else state.accessDenied = true
    } else {
      state.serverError = true
    }
  },
  async signOut ({ commit }) {
    await router.push('/')
    console.log('out')
    commit('signOut')
  },
  async toSingInView (commit) {
    await router.push('/')
  },
  async register ({ commit, state }) {
    state.isRegistrationViewUp = true
    await router.push('/registration')
  },
  async getArrayData ({ commit, state }, payload) {
    console.log(state.url + payload.path + '?' + new URLSearchParams({ userId: state.userId }))
    const result = await fetch(state.url + payload.path + '?' + new URLSearchParams({
      userId: state.userId
    }))
      .then(data => data.json())
      .catch(error => {
        console.log(error)
      })
    if (result !== undefined) {
      commit('sortByDate', { data: result, path: payload.path })
    }
  },
  async checkIfEmailOrLoginInDataBase ({ commit, state, dispatch }, payload) {
    console.log(payload)
    dispatch('checkIfUserWithParamInDatabase', payload.login)
    dispatch('checkIfUserWithParamInDatabase', payload.email)
    if (state.emailCorrect && state.loginCorrect) {
      await fetch(state.url + 'user?', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: payload.name,
          last_name: payload.surname,
          email: payload.email,
          login: payload.login,
          password: payload.password,
          sex: payload.sex,
          height: payload.height,
          yearOfBirth: payload.yearOfBirth
        })
      })
        .then(() => {
          state.userCreated = true
          state.accessDenied = false
          state.serverError = false
          state.isRegistrationViewUp = false
          router.push('/')
        })
        .catch(error => {
          console.log(error)
          state.errorWhileCreatingUser = true
        })
    }
  },
  async checkIfUserWithParamInDatabase ({ state, commit }, param) {
    let urlSP
    if (param.includes('@') && param.includes('.')) {
      urlSP = new URLSearchParams({ email: param })
    } else {
      urlSP = new URLSearchParams({ login: param })
    }
    console.log(state.url + 'user?' + urlSP)
    const result = await fetch(state.url + 'user?' + urlSP)
      .then(data => data.json())
      .catch(error => {
        console.log(error)
      })
    if (result !== undefined) {
      if (result.length !== 0) {
        if (param.includes('@') && param.includes('.')) {
          state.emailCorrect = false
        } else state.loginCorrect = false
      }
    }
  },
  async changeParam ({ state, commit }, param) { // change password or email or height
    const result = await fetch(state.url + 'user/' + state.userId)
      .then(data => data.json())
      .catch(error => console.log(error))
    if (result !== undefined) {
      if (typeof (param) === 'number') {
        result.height = param
      } else if (param.includes('@') && param.includes('.')) {
        result.email = param
      } else result.password = param
      console.log(JSON.stringify(result))
      await fetch(state.url + 'user/' + state.userId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(result)
      })
        .then(() => {
          console.log('wchodze do zmiany')
          if (typeof (param) === 'number') {
            state.heightChanged = true
            state.height = param
          } else if (param.includes('@') && param.includes('.')) {
            state.emailChanged = true
            state.email = param
          } else {
            state.passwordChanged = true
            state.password = param
          }
        })
        .catch(error => {
          console.log(error)
          if (typeof (param) === 'number') {
            state.errorWhileChangingHeight = true
          } else if (param.includes('@') && param.includes('.')) {
            state.errorWhileChangingEmail = true
          } else state.errorWhileChangingPassword = true
        })
    }
  },
  async deleteRecord ({ state, commit }, payload) {
    await fetch(state.url + payload.path + '/' + payload.itemID, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
      .then(() => {
        console.log('Notification deleted')
      })
      .catch(error => {
        console.log(error)
      })
  }
}
