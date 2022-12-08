import Popup from "./Popup.js";


export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    open(name, link) {
        super.open();
        const scaledImage = this._popup.querySelector('.popup__image-scaled');
        const scaledImageHeader = this._popup.querySelector('.popup__header-scaled');
        scaledImage.src = link;
        scaledImageHeader.alt = name;
        scaledImageHeader.textContent = name;
    }
}