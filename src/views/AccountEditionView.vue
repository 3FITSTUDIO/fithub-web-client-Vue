<template>
  <div class="registration" style="margin-top: 2%;">
    <div class="col-md-8 offset-md-2">
      <div class="d-flex justify-content-center h-100">
        <div class="card">
          <div class="card-header">
            <h2>Manage your account</h2>
          </div>
          <div class="card-body">
            <form>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <span>Login: {{login}} </span>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <span>Name: {{ name}} </span>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <span>Surname: {{surname}} </span>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <span>Sex: {{sex}} </span>
                  <p>Year of birth: {{yearOfBirth}}</p>
                  <span>Height: {{height}}
                    <select class="f-right" v-model="selectedHeight">
                    <option disabled value="">Change</option>
                    <option v-for="item in heightsToSelect" v-bind:value="item" v-bind:key="item.id">
                      {{ item.value }} cm
                    </option>
                  </select>
                  </span>
                  <p>
                    <span class="left failure" v-if="!isHeightSelected">Not selected</span>
                    <span class="left failure" v-if="errorWhileChangingHeight">Server error</span>
                    <span class="left success" v-if="heightChanged">Height changed</span>
                    <input v-on:click="changeHeight" value="Save" style="float: right" class="btn fithub_btn"/>
                  </p>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <p>Email: {{oldEmail}} </p>
                  <span>
                    <input v-model="email.value" type="email" id="inputEmail" placeholder="new email" class="form-control">
                    <span class="left failure" v-if="errorWhileChangingEmail">Server Error</span>
                    <span class="left success" v-if="emailChanged">Email changed</span>
                    <span v-if="!email.isCorrect" class="left failure">Wrong email</span>
                    <span v-if="!emailCorrect" class="left failure">Email taken</span>
                    <span v-if="emptyEmail" class="left failure">Fill the form</span>
                    <input v-on:click="changeEmail" value="Save" style="float: right" class="btn fithub_btn"/>
                  </span>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <span>
                    Old password
                    <span v-if="wrongOldPassword" class="right failure">Wrong password</span>
                  </span>
                  <input style="margin-bottom: 2px" v-model="oldPasswordInput" placeholder="Old password" type="password" id="inputOldPassword" class="form-control">
                  <span>
                    New password
                    <span v-if="!password.isCorrect" class="right failure">Wrong password</span>
                  </span>
                  <input style="margin-bottom: 2px" v-model="password.value" placeholder="Password123" type="password" id="inputNewPassword" class="form-control">
                  <span>
                    Confirm password
                    <span v-if="!arePasswordsCorrect" class="right failure">Invalid</span>
                  </span>
                  <input style="margin-bottom: 2px" v-model="confirm_password" type="password" id="confirmNewPassword" class="form-control">
                  <p>
                    <span class="left failure" v-if="errorWhileChangingPassword">Server Error</span>
                    <span class="left success" v-if="passwordChanged">Password changed</span>
                    <input v-on:click="changePassword" value="Save" style="float: right" class="btn fithub_btn"/>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sha256 } from 'js-sha256'
import { mapState } from 'vuex'

export default { // TODO wpisac wszystkie wartosci do Hasel, *sprawdzac czy new i confirm te same*, sprawdzic, czy niepuste, sprawdzic czy stare poprawne lokalnie, sprawdzic czy nowe haslo spelnia warunki, jesli wszystko ok, to dispatch(change Password)
  name: 'AccountEditionView',
  data () {
    return {
      isHeightSelected: true,
      selectedHeight: '',
      heightsToSelect: [],
      email: {
        value: '',
        isCorrect: true
      },
      password: {
        value: '',
        isCorrect: true
      },
      oldPasswordInput: '',
      isCorrect: true,
      confirm_password: '',
      emptyEmail: false,
      emptyPasswords: false,
      arePasswordsCorrect: true,
      ifAllCorrect: true,
      wrongOldPassword: false,
      regExpIfEmailCorrect: new RegExp('^[a-z][a-z0-9]+[@][a-z]{2,}[.][a-z]{2,}$', 'i'),
      regExpIfPassCorrect: new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')
    }// Minimum osiem znaków, co najmniej jedna wielka litera, jedna mała litera, jedna cyfra i jeden znak specjalny:
  },
  computed: mapState({
    heightChanged: state => state.heightChanged,
    errorWhileCreatingUser: state => state.errorWhileCreatingUser,
    loginCorrect: state => state.loginCorrect,
    emailCorrect: state => state.emailCorrect,
    name: state => state.username,
    surname: state => state.surname,
    login: state => state.login,
    height: state => state.height,
    sex: state => (state.sex === 'F') ? 'Female' : 'Male',
    yearOfBirth: state => state.yearOfBirth,
    oldPassword: state => state.password,
    oldEmail: state => state.email,
    emailChanged: state => state.emailChanged,
    passwordChanged: state => state.passwordChanged,
    errorWhileChangingPassword: state => state.errorWhileChangingPassword,
    errorWhileChangingEmail: state => state.errorWhileChangingEmail,
    errorWhileChangingHeight: state => state.errorWhileChangingHeight
  }),
  methods: {
    resetAllVariables () {
      this.$store.state.heightChanged = false
      this.$store.state.emailCorrect = true
      this.$store.state.loginCorrect = true
      this.$store.state.userCreated = false
      this.$store.state.errorWhileCreatingUser = false
      this.$store.state.emailChanged = false
      this.$store.state.passwordChanged = false
      this.$store.state.errorWhileChangingEmail = false
      this.$store.state.errorWhileChangingPassword = false
      this.$store.state.errorWhileChangingHeight = false
    },
    changeHeight () {
      this.isHeightSelected = true
      if (this.selectedHeight !== '') {
        this.resetAllVariables()
        this.$store.dispatch('changeParam', this.selectedHeight.value)
      } else this.isHeightSelected = false
    },
    changeEmail () {
      this.resetAllVariables()
      this.email.isCorrect = true
      this.emptyEmail = false
      if (this.email.value !== '') {
        this.email.isCorrect = (this.regExpIfEmailCorrect.test(this.email.value))
        if (this.email.isCorrect) {
          this.$store.dispatch('checkIfUserWithParamInDatabase', this.email.value).then(() => {
            if (this.$store.state.emailCorrect) {
              this.$store.dispatch('changeParam', this.email.value).then(() => {
                this.email.value = ''
              })
            }
          })
        }
      } else this.emptyEmail = true
    },
    changePassword () {
      this.resetAllVariables()
      this.wrongOldPassword = false
      this.emptyPasswords = false
      this.password.isCorrect = true
      if (this.password.value !== '' && this.arePasswordsCorrect && sha256(this.oldPasswordInput) === this.oldPassword) {
        this.password.isCorrect = (this.regExpIfPassCorrect.test(this.password.value))
        if (this.password.isCorrect) {
          this.$store.dispatch('changeParam', sha256(this.password.value)).then(() => {
            if (this.passwordChanged) {
              this.oldPasswordInput = ''
              this.password.value = ''
              this.confirm_password = ''
            }
          })
        }
      } else if (sha256(this.oldPasswordInput) !== this.oldPassword) {
        this.wrongOldPassword = true
      } else if (this.password.value === '' || this.confirm_password === '' || this.oldPasswordInput === '') {
        this.emptyPasswords = true
      }
    },
    createHeightArray () {
      this.heightsToSelect = Array.from({ length: 90 }, (x, i) => { return { id: i, value: 130 + i } })
    }
  },
  watch: {
    confirm_password () {
      if (this.password.value !== '' && this.confirm_password !== '') {
        this.arePasswordsCorrect = (this.password.value === this.confirm_password)
      }
    }
  },
  mounted () {
    this.createHeightArray()
    this.resetAllVariables()
  }
}
</script>

<style scoped>
  p {
    margin-bottom: 0;
  }
  .success {
    color: green;
  }
  .failure {
    color: red
  }
  .form-row {
    margin: 0;
    height: auto;
    text-align: left;
  }
  .left {
    font-size: 13px;
    float: left;
  }
  .right{
    font-size: 13px;
    float: right;
  }

</style>
