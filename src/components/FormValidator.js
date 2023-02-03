export default class FormValidator {
  constructor(formSettings, formToValidate) {
    this._inputSelector = formSettings.inputSelector;
    this._formSelector = formSettings.formSelector;
    this._formToValidate = formToValidate;
    this._submitButton = formToValidate.querySelector(
      formSettings.submitBtnSelector
    );
    this._submitButtonDisabledSelector =
      formSettings.submitButtonDisabledSelector;
    this._popupInputErrorSelector = formSettings.popupInputErrorSelector;
    this._inputErrorClass = formSettings.inputErrorClass;
    this._errorElement = document.querySelector(this._popupInputErrorSelector);
    this._errorMessage = formSettings.errorMessage;
    this._formInputs = Array.from(
      formToValidate.querySelectorAll(this._inputSelector)
    );
  }
  _hasInvalidInput() {
    return this._formInputs.some(
      (inputElement) => !inputElement.validity.valid
    );
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._submitButtonDisabledSelector);
      this._submitButton.setAttribute("disabled", true);
    } else {
      this._submitButton.classList.remove(this._submitButtonDisabledSelector);
      this._submitButton.removeAttribute("disabled", true);
    }
  }
  _showErrorMessage(input) {
    const errorElement = this._formToValidate.querySelector(
      `.${input.id}-error`
    );
    errorElement.classList.add(this._popupInputErrorSelector);
    errorElement.style.visibility = "visible";
    input.classList.add(this._inputErrorClass);
    errorElement.textContent = this._errorMessage;
  }
  _hideErrorMessage(input) {
    const errorElement = this._formToValidate.querySelector(
      `.${input.id}-error`
    );
    input.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._popupInputErrorSelector);
    errorElement.textContent = "";
  }

  _isValid(input) {
    if (!input.validity.valid) {
      this._showErrorMessage(input);
    } else {
      this._hideErrorMessage(input);
    }
  }
  _setInputEventListeners() {
    this._formInputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._toggleButtonState();
        this._isValid(input);
      });
    });
  }
  enableValidation() {
    this._setInputEventListeners();
  }
  resetValidation() {
    this._toggleButtonState();
    this._formInputs.forEach((inputEl) => {
      this._hideErrorMessage(inputEl);
    });
  }
}
