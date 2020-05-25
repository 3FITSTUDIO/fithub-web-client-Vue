const errorModel = {
  errorType: {
    serverError: 'Server error',
    InvalidInput: 'Invalid Input',
    DifferentPassword: 'DifferentPasswords'
  },
  checkIfInputsNotEmpty (login, name, surname, email, password, confirmPassword, selectedSex, selectedHeight, selectedYearOfBirth) {
    return (login.value !== '' &&
      name.value !== '' &&
      surname.value !== '' &&
      email.value !== '' &&
      password.value !== '' &&
      confirmPassword !== '' &&
      selectedSex !== '' &&
      selectedHeight !== '' &&
      selectedYearOfBirth !== '')
  },
  checkIfAllInputsValid (login, name, surname, email, password, arePasswordsCorrect) {
    return (login.isCorrect &&
      name.isCorrect &&
      surname.isCorrect &&
      email.isCorrect &&
      password.isCorrect &&
      arePasswordsCorrect)
  }
}

export default errorModel
