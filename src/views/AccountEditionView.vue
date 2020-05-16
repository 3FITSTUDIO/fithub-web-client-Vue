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
                  <p>Email: {{oldEmail}} </p>
                  <span v-if="!email.isCorrect" class="right">Wrong email</span>
                  <span v-if="!emailCorrect" class="right">Email already taken</span>
                  <span>
                    <input v-model="email.value" type="email" id="inputEmail" placeholder="new email" class="form-control">
                    <input v-on:click="changeEmail" value="Save" style="float: right" class="btn edit_btn"/>
                  </span>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <span>Old password</span>
                  <span v-if="!password.isCorrect" class="right">Wrong password</span>
                  <input style="margin-bottom: 2px" v-model="oldPasswordInput" placeholder="Old password" type="password" id="inputOldPassword" class="form-control">
                  <span>New password</span>
                  <input style="margin-bottom: 2px" v-model="password.value" placeholder="P@ssword123" type="password" id="inputNewPassword" class="form-control">
                  <span>Confirm password <span v-if="!arePasswordsCorrect" class="right">Invalid</span></span>
                  <input style="margin-bottom: 2px" v-model="confirm_password" type="password" id="confirmNewPassword" class="form-control">
                  <p>
                    <input v-on:click="changePassword" value="Save" style="float: right" class="btn edit_btn"/>
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
import { mapState } from 'vuex'

export default { // TODO wpisac wszystkie wartosci do Hasel, *sprawdzac czy new i confirm te same*, sprawdzic, czy niepuste, sprawdzic czy stare poprawne lokalnie, sprawdzic czy nowe haslo spelnia warunki, jesli wszystko ok, to dispatch(change Password)
  name: 'AccountEditionView',
  data () {
    return {
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
      regExpIfEmailCorrect: new RegExp('^[a-z]{2,}[@][a-z]{2,}[.][a-z]{2,}$', 'i'),
      regExpIfPassCorrect: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
    }// Minimum osiem znaków, co najmniej jedna wielka litera, jedna mała litera, jedna cyfra i jeden znak specjalny:
  },
  computed: mapState({
    errorWhileCreatingUser: state => state.errorWhileCreatingUser,
    loginCorrect: state => state.loginCorrect,
    emailCorrect: state => state.emailCorrect,
    name: state => state.username,
    surname: state => state.surname,
    login: state => state.login,
    oldPassword: state => state.password,
    oldEmail: state => state.email
  }),
  methods: {
    resetALLInputValues () {
      this.emptyInputs = false
      this.login.isCorrect = true
      this.name.isCorrect = true
      this.surname.isCorrect = true
      this.email.isCorrect = true
      this.password.isCorrect = true
      this.ifAllCorrect = true
    },
    changeEmail () {
      this.emailCorrect = true
      this.email.isCorrect = true
      this.emptyEmail = false
      if (this.email.value !== '') {
        this.email.isCorrect = (this.regExpIfEmailCorrect.test(this.email.value))
        if (this.email.isCorrect) {
          this.$store.dispatch('checkIfUserWithParamInDatabase', this.email)
          if (this.$store.state.emailCorrect) {
            this.$store.dispatch('changeParam', this.email)
          }
        }
      } else this.emptyEmail = true
    },
    changePassword () {
      this.emptyPasswords = false
      this.password.isCorrect = true
      if (this.password.value !== '' && this.arePasswordsCorrect) {
        this.password.isCorrect = this.regExpIfPassCorrect(this.password.value)
        if (this.password.isCorrect) {
          this.$store.dispatch('changeParam', this.password)
        }
      }
    }
  },
  watch: {
    confirm_password () {
      if (this.password.value !== '' && this.confirm_password !== '') {
        this.arePasswordsCorrect = (this.password.value === this.confirm_password)
      }
    }
  }
}
</script>

<style scoped>
  .edit_btn {
    margin: 5px;
    color: whitesmoke;
    background-color: rgb(0,128,0);
    width: 100px;
  }
  .form-row {
    margin: 0;
    height: auto;
    text-align: left;
  }
  .right {
    font-size: 13px;
    color: red;
    float: right;
  }

</style>
