/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */

class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
    this.view.signUp = this.model.signUp
    this.view.signIn = this.model.signIn
    this._init()
    this.router = this.router.bind(this)
    this.onNavigate = this.onNavigate.bind(this)
    this.view.onNavigate = this.onNavigate
    this.view.onInputChanged = this.model.onInputChanged
    this.view.clearState = this.model.clearState
    this.view.getPatientCards = this.model.getCards
  }

  _init() {
    window.addEventListener('load', (e) => {
      console.log('load  ->')
      this.onNavigate('/signup')
    })
    window.addEventListener('popstate', (e) => {
      if (e.state && e.state.pathname) {
        console.log('GO->', e.state.pathname)
        this.router(e.state.pathname)
      }
      e.stopPropagation()
    })
  }

  onNavigate = (pathname) => {
    window.history.pushState(
      {pathname},
      null,
      window.location.origin + pathname
    )
    this.router(pathname)
  }

  router(route) {
    console.log('go route', route)
    switch (route) {
      case '/':
        return this.view.renderSignUp()
      case '/signup':
        return this.view.renderSignUp()
      case '/signin':
        return this.view.renderSignIn()
      case '/restore-password':
        return this.view.renderRestorePassword()
      case '/restore-password-message':
        return this.view.renderRestorePasswordMessage()
      case '/clinic':
        return this.view.renderClinic()
      default:
        return this.view.renderSignUp()
    }
  }
}
