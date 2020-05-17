<template>
  <div class="registration" style="margin-top: 2%;">
    <div class="col-md-8 offset-md-2">
      <div class="d-flex justify-content-center h-100">
        <div class="card">
          <div class="card-header">
            <h2>Welcome on board!</h2>
          </div>
          <div class="card-body">
            <form>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <span>Login <span v-if="!login.isCorrect" class="right">Wrong login</span>
                  <span v-if="!loginCorrect" class="right">Login already taken</span></span>
                  <input v-model="login.value" type="text" id="inputLogin" class="form-control" placeholder="Example123">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <span>Name <span v-if="!name.isCorrect" class="right">Wrong pattern</span></span>
                  <input v-model="name.value" type="text" id="inputName" class="form-control">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <span>Surname<span v-if="!surname.isCorrect" class="right">Wrong pattern</span></span>
                  <input v-model="surname.value" type="text" id="inputSurname" class="form-control">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <span>E-mail <span v-if="!email.isCorrect" class="right">Wrong e-mail</span>
                  <span v-if="!emailCorrect" class="right">Email already taken</span></span>
                  <input v-model="email.value" type="text" id="inputEmail" class="form-control">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <span>Password <span v-if="!password.isCorrect" class="right">Wrong password</span></span>
                  <input v-model="password.value" type="password" id="inputPassword" class="form-control" placeholder="Password123!">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  <span>Confirm Password <span v-if="!arePasswordsCorrect" class="right">Invalid</span> </span>
                  <input v-model="confirm_password" type="password" id="inputConfirmPassword" class="form-control">
                </div>
              </div>
              <span class="left" v-if="emptyInputs">Fill all forms</span>
              <span class="left" v-if="errorWhileCreatingUser">Error while creating user</span>
              <input v-on:click="checkValues" style="float: right" value="create new account" class="btn float-center login_btn_registration"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'RegistrationView',
  data () {
    return {
      login: {
        value: '',
        isCorrect: true
      },
      name: {
        value: '',
        isCorrect: true
      },
      email: {
        value: '',
        isCorrect: true
      },
      surname: {
        value: '',
        isCorrect: true
      },
      password: {
        value: '',
        isCorrect: true
      },
      confirm_password: '',
      emptyInputs: false,
      arePasswordsCorrect: true,
      ifAllCorrect: true,
      regExpIfLoginCorrect: new RegExp('^([a-z]+[0-9a-z]{4,})$', 'i'), // Ex1a2mpl3
      regExpIfStringCorrect: new RegExp('^([a-z]+)$', 'i'),
      reExpIfEmailCorrect: new RegExp('^[a-z][a-z0-9]+[@][a-z]{2,}[.][a-z]{2,}$', 'i'),
      regExpIfPassCorrect: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
    }// Minimum osiem znaków, co najmniej jedna wielka litera, jedna mała litera, jedna cyfra i jeden znak specjalny:
  },
  computed: mapState({
    errorWhileCreatingUser: state => state.errorWhileCreatingUser,
    loginCorrect: state => state.loginCorrect,
    emailCorrect: state => state.emailCorrect
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
    checkValues () {
      this.$store.state.loginCorrect = true
      this.$store.state.emailCorrect = true
      this.$store.state.errorWhileCreatingUser = false
      if (this.login.value !== '' &&
        this.name.value !== '' &&
        this.surname.value !== '' &&
        this.email.value !== '' &&
        this.password.value !== '' &&
        this.confirm_password.value !== '') {
        this.emptyInputs = false
        this.resetALLInputValues()
        console.log('niepuste!')
        this.login.isCorrect = (this.regExpIfLoginCorrect.test(this.login.value))
        this.name.isCorrect = (this.regExpIfStringCorrect.test(this.name.value))
        this.surname.isCorrect = (this.regExpIfStringCorrect.test(this.surname.value))
        this.email.isCorrect = (this.reExpIfEmailCorrect.test(this.email.value))
        this.password.isCorrect = (this.regExpIfPassCorrect.test(this.password.value))
        this.ifAllCorrect = (this.login.isCorrect &&
          this.name.isCorrect &&
          this.surname.isCorrect &&
          this.email.isCorrect &&
          this.password.isCorrect &&
          this.arePasswordsCorrect)
        if (this.ifAllCorrect) {
          this.$store.dispatch('checkIfEmailOrLoginInDataBase', {
            login: this.login.value,
            name: this.name.value,
            surname: this.surname.value,
            email: this.email.value,
            password: this.password.value // TODO zahashowane
          })
          console.log(this.login.value,
            this.name.value,
            this.surname.value,
            this.email.value,
            this.password.value,
            this.confirm_password)
        }
      } else this.emptyInputs = true
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
</script >

<style scoped>
  .left {
    font-size: 13px;
    text-align: left;
    color: red;
    margin-right: 10px;
  }
  .form-group {
    text-align: left;
    float: left;
  }
  .right {
    font-size: 13px;
    color: red;
    float: right;
  }
</style>
