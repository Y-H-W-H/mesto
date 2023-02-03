import Popup from "./Popup.js";


export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._scaledImage = this._popup.querySelector('.popup__image-scaled');
        this._scaledImageHeader = this._popup.querySelector('.popup__header-scaled');
    }
    open(name, link) {
        super.open();
        this._scaledImage.src = link;
        this._scaledImageHeader.alt = name;
        this._scaledImageHeader.textContent = name;
    }

}