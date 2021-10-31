/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */

export default class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
    this.view.signUp = this.model.signUp
    this.view.signIn = this.model.signIn
  }
}
