/**
 * @class View
 *
 * Visual representation of the model.
 */
class View {
  constructor() {
    this.app = this.getElement('#root')
    this.content = this.createElement('div', 'content')
    this.app.append(this.content)
    this.signupInputList = signupInputList
    this.signinInputList = signinInputList
    this.restorePasswordInputList = restorePasswordInputList
    this.onNavigate = null
    this.onInputChanged = null
    this.clearState = null
    this.signIn = null
    this.signUp = null
    this.getPatientCards = null
  }


  clearView(rootElement) {
    console.log('clear view')
    this.clearState()
    while (rootElement.firstChild) {
      rootElement.removeChild(rootElement.firstChild)
    }
  }

  eyeButtonHandler(input) {
    input.type = input.type === 'text' ? 'password' : 'text'
  }

  createInput(element) {
    const {icon, placeholder, type, name} = element
    const wrapper = this.createElement('div', "form__input-wrapper")
    const inputIcon = this.createElement('span', `form__input-icon`)
    inputIcon.classList.add(`${icon}`)
    const input = this.createElement('input', 'form__input')
    input.type = type ? type : 'text'
    input.placeholder = placeholder
    input.name = name
    input.id = name
    input.minLength = 4
    input.autocomplete = 'off'
    input.required = true
    input.noValidate = true
    input.addEventListener('input', (e) => {
      this.onInputChanged(e)
    })
    const span = this.createElement('span', 'form__input-error')
    span.id = `${name}-error`
    wrapper.append(inputIcon, input, span)
    if (type === 'password') {
      const eyeButton = this.createElement('button', 'form__input-icon')
      eyeButton.classList.add('icon-eye')
      eyeButton.type = 'button'
      eyeButton.addEventListener('click', () => {
        this.eyeButtonHandler(input)
      })
      wrapper.append(eyeButton)
    }
    return wrapper
  }

  createHeader(headerText) {
    const header = this.createElement('div', 'form__header')
    const title = this.createElement('h1', 'form__header-text')
    title.textContent = headerText
    header.append(title)
    return header
  }

  createSubmitButton(buttonText) {
    const button = this.createElement('button', "form__submit")
    button.textContent = buttonText
    const buttonSpan = this.createElement('span', 'form__submit-schevron')
    button.append(buttonSpan)
    return button
  }


  createElement(tag, className) {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)
    return element
  }

  getElement(selector) {
    const element = document.querySelector(selector)
    return element
  }

  createPatientCard(data, container) {
    const {name, avatar, status, time, result} = data
    const st = {
      1: {
        color: 'green',
        text: 'Appointment is confirmed'
      },
      2: {
        color: 'blue',
        text: 'Waiting for confirmation...'
      },
      3: {
        color: 'red',
        text: 'Appointment is canceled'
      }
    }
    const article = this.createElement('article', 'patient__card')
    article.innerHTML = `<div class="patient__bio">
        <img src="${avatar}" alt="avatar" class="patient__bio-avatar">
        <h3 class="patient__bio-name">${name}</h3>
        <span class="patient__bio-status-indicator ${st[status].color}"></span>
        <p class="patient__bio-status">${st[status].text}</p>
        <button class="patient__bio-dotburger icon-dorburger"></button>
        <div class="patient__menu">
            <button class="patient__menu-button">Create a resolution</button>
            <button class="patient__menu-button">Edit an appointment</button>
            <button class="patient__menu-button" style="color: #FF2567;">Delete</button>
        </div>
      </div>
      <div class="patient__info">
        <span class="patient__info-icon icon-clock"></span>
        <p class="patient__time">
          ${time}</p>
          ${result ?
      `<span class="patient__info-icon icon-clipboard"></span>
                    <p style="margin: 0">${result}</p></div>` : ''}`
    const button = article.querySelector('.patient__bio-dotburger')
    const menu = article.querySelector('.patient__menu')
    button.addEventListener('click', (e) => {
      console.log('burger!->', e)
      button.classList.toggle('patient__bio-dotburger_active')
      button.classList.toggle('icon-dorburger_active')
      menu.classList.toggle('patient__menu_visible')
    })
    container.append(article)
  }

  renderClinic() {
    this.clearView(this.app)
    this.app.classList.add('clinic')
    this.app.innerHTML = clinicTemplate
    const container = this.app.querySelector('.clinic__content-container')
    this.getPatientCards().map(card => {
      this.createPatientCard(card, container)
    })
  }

  renderRestorePasswordMessage() {
    this.clearView(this.content)
    this.form = this.createElement('form', 'form')
    this.form.innerHTML =
      `<p class="form__text">An email has been sent to <span class="form__email">example@exam.com</span>. Check your
      inbox, and click
      the reset
      link
      provided.</p>`
    this.header = this.createHeader('Restore password')
    this.button = this.createElement('a', 'form__header-button')
    this.button.addEventListener('click', () => {
      this.onNavigate('/signin')
    })
    this.header.prepend(this.button)
    this.form.prepend(this.header)
    this.content.append(this.form)
  }

  renderRestorePassword() {
    this.clearView(this.content)
    this.form = this.createElement('form', 'form')
    this.form.addEventListener('submit', () => {
      this.onNavigate('/restore-password-message')
    })
    this.header = this.createHeader('Restore Password')
    this.button = this.createElement('a', 'form__header-button')
    this.button.addEventListener('click', () => {
      this.onNavigate('/signin')
    })
    this.header.prepend(this.button)
    this.textEl = this.createElement('p', 'form__input-wrapper')
    this.textEl.textContent = 'Please use your email address, and we`ll send you the link to reset your password'
    this.inputList = this.restorePasswordInputList.map(input => this.createInput(input))
    this.inputList.forEach(input => this.form.append(input))
    this.submitButton = this.createSubmitButton('Send Reset Link')
    this.form.prepend(this.header, this.textEl)
    this.form.append(this.submitButton)
    this.content.append(this.form)
  }

  renderSignIn() {
    this.clearView(this.content)
    this.form = this.createElement('form', 'form')
    this.form.addEventListener('submit', (e) => {
      e.preventDefault()
      this.signIn().then(m => {
        console.log(m)
        this.onNavigate('/clinic')
      }).catch(err => console.log(err))
    })
    this.header = this.createHeader('Sign in')
    this.submitButton = this.createSubmitButton('Sign in')
    this.footer = this.createElement('div', 'footer')
    this.footerText = this.createElement('p', 'footer__text')
    this.footerText.textContent = 'Don`t have an account?'
    this.formLink = this.createElement('a', 'form__restore-link')
    this.formLink.textContent = 'Forgot Password?'
    this.formLink.addEventListener('click', () => {
      this.onNavigate('/restore-password')
    })
    this.footerLink = this.createElement('a', 'footer__link')
    this.footerLink.textContent = `Sign up`
    this.footerLink.addEventListener('click', () => {
      this.onNavigate('/signup')
    })
    this.footer.append(this.footerText, this.footerLink)
    this.inputList = this.signinInputList.map(input => this.createInput(input))
    this.inputList.forEach(input => this.form.append(input))
    this.form.prepend(this.header)
    this.form.append(this.submitButton, this.formLink)
    this.content.append(this.form, this.footer)

    enableValidation(validationConfig);
  }

  renderSignUp() {
    this.clearView(this.content)
    this.form = this.createElement('form', 'form')
    this.form.addEventListener('submit', (e) => {
      e.preventDefault()
      this.signUp().then(_ => {
        this.onNavigate('/signin')
      })
    })
    this.header = this.createHeader('Sign up')
    this.submitButton = this.createSubmitButton('Sign up')
    this.footer = this.createElement('div', 'footer')
    this.footerText = this.createElement('p', 'footer__text')
    this.footerText.textContent = 'Already have an account?'
    this.footerLink = this.createElement('a', 'footer__link')
    this.footerLink.textContent = `Sign in`
    this.footerLink.addEventListener('click', () => {
      this.onNavigate('/signin')
    })
    this.footer.append(this.footerText, this.footerLink)
    this.inputList = this.signupInputList.map(input => this.createInput(input))
    this.inputList.forEach(input => this.form.append(input))
    this.form.prepend(this.header)
    this.form.append(this.submitButton)
    this.content.append(this.header, this.form, this.footer)

    enableValidation(validationConfig);
  }
}
