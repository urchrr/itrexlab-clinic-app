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
    this.render = this.render.bind(this)
    this.render(window.location.pathname)
    this.state = {}
    this.signIn = null
    this.signUp = null
    this._init()
  }

  _init() {
    const {render} = this
    window.addEventListener('popstate', function(e)  {
      // alert("location: " + document.location + ", state: " + JSON.stringify(e.state));
      console.log(e, ' eve')
      console.log('history', history)
      if (e.state && e.state.pathname) {
        console.log('go')
        let state = e.state;
        render(e.state.pathname)
      }
      e.stopPropagation()
    })

  }

  onInputChanged(e) {
    const {name, value} = e.target
    this.state = {...this.state, [name]: value}
  }

  render(route) {

    console.log('this render', this)
    switch (route) {
      case '/':
        return this.renderSignUp()
      case '/signup':
        return this.renderSignUp()
      case '/signin':
        return this.renderSignIn()
      case '/restore-password':
        return this.renderRestorePassword()
      case '/restore-password-message':
        return this.renderRestorePasswordMessage()
      case '/clinic':
        return this.renderClinic()
      default:
        return this.renderSignUp()
    }
  }


  clearView(rootElement) {
    console.log('clear?')
    this.state = {}
    while (rootElement.firstChild) {
      rootElement.removeChild(rootElement.firstChild)
    }
  }


  eyeButtonHandler(input) {
    input.type = input.type === 'text' ? 'password' : 'text'
  }

  onNavigate = (pathname) => {
    window.history.pushState(
      {pathname},
      null,
      window.location.origin + pathname
    )
    this.render(pathname)
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

  renderClinic() {
    this.clearView(this.app)
    this.app.classList.add('clinic')
    this.app.innerHTML = clinicTemplate
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
      this.signIn(this.state).then(m => {
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
    this.formLink.href = '#'
    this.formLink.textContent = 'Forgot Password?'
    this.formLink.addEventListener('click', () => {
      this.onNavigate('/restore-password')
    })
    this.footerLink = this.createElement('a', 'footer__link')
    this.footerLink.href = '#'
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
      this.signUp(this.state).then(_ => {
        this.onNavigate('/signin')
      })
    })
    this.header = this.createHeader('Sign up')
    this.submitButton = this.createSubmitButton('Sign up')
    this.footer = this.createElement('div', 'footer')
    this.footerText = this.createElement('p', 'footer__text')
    this.footerText.textContent = 'Already have an account?'
    this.footerLink = this.createElement('a', 'footer__link')
    this.footerLink.href = '#'
    this.footerLink.textContent = `Sign in`
    this.footerLink.addEventListener('click', () => {
      console.log('ha!')
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
