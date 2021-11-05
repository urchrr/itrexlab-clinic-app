class Validation {
  constructor(validationConfig, form) {
    this.config = validationConfig
    this.form = form
    this.submitButton = this.form.querySelector(this.config.submitButtonSelector);
    this.inputsList = this.form.querySelectorAll(this.config.inputSelector);
    this.showError = this.showError.bind(this)
    this.hideError = this.hideError.bind(this)
    this.checkInputValidity = this.checkInputValidity.bind(this)
    this.setButtonState = this.setButtonState.bind(this)
    this.setEventListeners = this.setEventListeners.bind(this)
  }

  showError(input, customText) {
    const error = this.form.querySelector(`#${input.id}-error`);
    error.textContent = customText ? customText : input.validationMessage;
    input.classList.add(this.config.inputInvalidClass);
  }

  hideError(input) {
    const error = this.form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(this.config.inputInvalidClass);
  }

  checkInputValidity(input) {
    if (!input.validity.valid) {
      this.showError(input);
    } else {
      this.hideError(input);
    }
  }

  setButtonState(isActive) {
    if (isActive) {
      this.submitButton.classList.remove(this.config.buttonInvalidClass);
      this.submitButton.disabled = false;
    } else {
      this.submitButton.classList.add(this.config.buttonInvalidClass);
      this.submitButton.disabled = true;
    }
  }

  setEventListeners() {
    this.inputsList.forEach((input) => {
      input.addEventListener('blur', () => {
        this.checkInputValidity(input);
      });
      input.addEventListener('input', () => {
        if (input.validity.valid) {
          this.hideError(input);
        }
        this.setButtonState(this.form.checkValidity());
      });
    });
  }

  enableValidation() {
    this.setEventListeners();
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    this.setButtonState(this.form.checkValidity())
  }
}
