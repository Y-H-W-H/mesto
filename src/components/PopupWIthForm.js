import { popupDeleteCard } from "../utils/constants.js";
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit.bind(this);
    this._form = this._popup.querySelector(".popup__form");
    this._formSmbtButton = this._form.querySelector(".popup__submit-button");
    this._inputList = Array.from(this._form.querySelectorAll(".popup__input"));
    this.close = this.close.bind(this);
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  indicateProgress(saveOrBack) {
    if (saveOrBack) {
      this._formSmbtButton.textContent = "Сохраняем...";
    } else {
      this._formSmbtButton.textContent = "Сохранить";
    }
  }
  close() {
    super.close();

    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}
