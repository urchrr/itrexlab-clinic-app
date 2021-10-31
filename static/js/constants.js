export const signupInputList = [
  {
    icon: `icon-person`,
    placeholder: `First Name`,
    name: 'firstName'
  },
  {
    icon: 'icon-person',
    placeholder: `Second Name`,
    name: 'secondName'
  },
  {
    icon: 'icon-email',
    type: 'email',
    placeholder: 'Email',
    name: 'email'
  },
  {
    icon: 'icon-lock',
    type: 'password',
    placeholder: 'Password',
    name: 'password'
  },
  {
    icon: 'icon-lock',
    type: 'password',
    placeholder: 'Confirm password',
    name: 'confirmPassword'
  }
]
export const signinInputList = [
  {
    icon: `icon-email`,
    placeholder: `Email`,
    type: 'email',
    name: 'email'
  },
  {
    icon: 'icon-lock',
    placeholder: `Password`,
    type: 'password',
    name: 'password'
  },
]

export const restorePasswordInputList = [
  {
    icon: `icon-email`,
    placeholder: `Email`,
    name: 'email'
  },
]

export  const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inputInvalidClass: 'form__input_invalid',
  buttonInvalidClass: 'form__submit_invalid',
};
