import Input from './UI/Input'
import useInput from '../hooks/user-input'

const BasicForm = props => {
  let formIsValid = false
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput
  } = useInput(value => value.trim() !== '')

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput(value => value.trim() !== '')

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.trim() !== '' && value.includes('@'))

  const formSubmissionHandler = event => {
    event.preventDefault()

    if (!firstNameIsValid && !lastNameIsValid && !emailIsValid) {
      return
    }
    console.log(firstName)
    resetFirstNameInput()
    resetLastNameInput()
    resetEmailInput()
  }

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <Input
          styles={firstNameInputHasError ? 'form-control invalid' : 'form-control'}
          label="First Name"
          input={{
            id: 'firstName',
            type: 'text',
            onChange: firstNameChangedHandler,
            onBlur: firstNameBlurHandler,
            value: firstName
          }}
        />
        <Input
          styles={lastNameInputHasError ? 'form-control invalid' : 'form-control'}
          label="Last Name"
          input={{
            id: 'lastName',
            type: 'text',
            onChange: lastNameChangedHandler,
            onBlur: lastNameBlurHandler,
            value: lastName
          }}
        />
      </div>
      <Input
        styles={emailInputHasError ? 'form-control invalid' : 'form-control'}
        label="E-Mail Address"
        input={{
          id: 'email',
          type: 'text',
          onChange: emailChangedHandler,
          onBlur: emailBlurHandler,
          value: email
        }}
      />
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
