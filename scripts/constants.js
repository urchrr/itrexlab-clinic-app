const signupInputList = [
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
const signinInputList = [
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

const restorePasswordInputList = [
  {
    icon: `icon-email`,
    placeholder: `Email`,
    name: 'email'
  },
]

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inputInvalidClass: 'form__input_invalid',
  buttonInvalidClass: 'form__submit_invalid',
};

const clinicTemplate = `
<div class="clinic__header">

  <img class='clinic__logo' src="./images/logo.png" alt="logo">

  <div class="clinic__doctor">
    <span class="clinic__doctor-indicator"></span>
    <img class='clinic__doctor-avatar' src="./images/avatar.png" alt="avatar">
  </div>
</div>

<div class='clinic__content'>
  <div class="clinic__content-nav">
    <button class="clinic__content-nav-btn clinic__content-nav-btn_active">Patients</button>
    <button class="clinic__content-nav-btn">Resolutions</button>
  </div>
  <div class="clinic__content-ctrl">
    <h2 class="clinic__content-ctrl-title">My Patients</h2>
    <button class="clinic__content-ctrl-btn icon-search"></button>
    <button class="clinic__content-ctrl-btn icon-settings"></button>
  </div>
  <div class="clinic__content-container">
  </div>
</div>

`
