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
                  Sex
                  <select class="f-right" v-model="selectedSex">
                    <option disabled value="">Choose sex</option>
                    <option v-for="item in sexesToSelect" v-bind:value="item.value" v-bind:key="item.value">
                      {{ item.text }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  Year of birth
                  <select class="f-right" v-model="selectedYearOfBirth">
                    <option disabled value="">Choose year</option>
                    <option v-for="item in yearsToSelect" v-bind:value="item.value" v-bind:key="item.id">
                      {{ item.value }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8 offset-md-2">
                  Height
                  <select class="f-right" v-model="selectedHeight">
                    <option disabled value="">Choose height</option>
                    <option v-for="item in heightsToSelect" v-bind:value="item.value" v-bind:key="item.id">
                      {{ item.value }} cm
                    </option>
                  </select>
                </div>
              </div>
<!--              <span>Selected: {{ selectedSex }} {{selectedYearOfBirth}} {{selectedHeight}}</span>-->
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
              <input v-on:click="handleRegisterButtonClick" style="float: right" value="create new account" class="btn float-center local-width fithub_btn"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { sha256 } from 'js-sha256'
import errorModel from '../models/ErrorInputeModel'

export default {
  name: 'RegistrationView',
  data () {
    return {
      yearsToSelect: [],
      sexesToSelect: [
        { text: 'Female', value: 'F' },
        { text: 'Male', value: 'M' }
      ],
      heightsToSelect: [],
      selectedHeight: '',
      selectedSex: '',
      selectedYearOfBirth: '',
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
    resetInputValues () {
      this.selectedYearOfBirth = ''
      this.selectedHeight = ''
      this.selectedSex = ''
      this.surname.value = ''
      this.name.value = ''
      this.login.value = ''
    },
    resetInputIsCorrect () {
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
      if (errorModel.checkIfInputsNotEmpty(this.login,
        this.name,
        this.surname,
        this.email,
        this.password,
        this.confirm_password,
        this.selectedSex,
        this.selectedHeight,
        this.selectedYearOfBirth)) {
        this.resetInputIsCorrect()
        this.emptyInputs = false
        console.log('niepuste!')
        this.login.isCorrect = (this.regExpIfLoginCorrect.test(this.login.value))
        this.name.isCorrect = (this.regExpIfStringCorrect.test(this.name.value))
        this.surname.isCorrect = (this.regExpIfStringCorrect.test(this.surname.value))
        this.email.isCorrect = (this.reExpIfEmailCorrect.test(this.email.value))
        this.password.isCorrect = (this.regExpIfPassCorrect.test(this.password.value))
        this.ifAllCorrect = errorModel.checkIfAllInputsValid(this.login,
          this.name,
          this.surname,
          this.email,
          this.password,
          this.arePasswordsCorrect)
        if (this.ifAllCorrect) {
          return true
        }
      } else {
        this.emptyInputs = true
        return false
      }
    },
    handleRegisterButtonClick () {
      if (this.checkValues()) {
        this.$store.dispatch('checkIfEmailOrLoginInDataBase', {
          login: this.login.value,
          name: this.name.value,
          surname: this.surname.value,
          email: this.email.value,
          password: sha256(this.password.value),
          sex: this.selectedSex,
          height: this.selectedHeight,
          yearOfBirth: this.selectedYearOfBirth
        }).then(() => {
          this.resetInputValues()
        })
      }
    },
    createSelectArrays () {
      this.yearsToSelect = Array.from({ length: 100 }, (x, i) => { return { id: i, value: 2020 - i } })
      this.heightsToSelect = Array.from({ length: 90 }, (x, i) => { return { id: i, value: 130 + i } })
    }
  },
  mounted () {
    this.createSelectArrays()
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
  .local-width {
    width: 200px;
  }
  .left {
    font-size: 13px;
    text-align: left;
    color: red;
    margin-right: 10px;
  }
  .form-group {
    text-align: left;
    float: left;
    padding: 0;
  }
  .form-row {
    padding: 0!important;
  }
  .f-right {
    float: right;
  }
  .right {
    font-size: 13px;
    color: red;
    float: right;
  }
</style>
