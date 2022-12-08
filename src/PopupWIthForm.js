
import { formSettings } from "./constants.js";
import Popup from "./Popup.js";


export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector(formSettings.formSelector);
    };
    _getInputValues() {
        this._inputList = Array.from(this._form.querySelectorAll(formSettings.inputSelector));
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }
    close() {
        super.close();
        this._form.reset();
    };
    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();

        });
    }


};



