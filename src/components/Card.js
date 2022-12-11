




export default class Card {
    constructor({ cardData, cardTemplateSelector, handleCardClick }) {
        this._image = cardData.link;
        this._header = cardData.name;
        this._cardTemplateSelector = cardTemplateSelector;
        this._handleCardClick = handleCardClick;
    }
    _getTemplate() {
        const cardTemplate = document.querySelector(this._cardTemplateSelector).content.querySelector('.elements__card').cloneNode(true);
        return cardTemplate;
    }
    _deleteCard() {
        this._cardElement.remove();
    }
    _likeCard() {
        this._likeBtn.classList.toggle('elements__like_active');
    }

    _setEventListeners() {
        this._trashBtn.addEventListener('click', () => this._deleteCard());
        this._likeBtn.addEventListener('click', () => this._likeCard());
        this._link.addEventListener('click', () => this._handleCardClick(this._header, this._image));



    }
    generateCard() {
        this._cardElement = this._getTemplate();
        this._likeBtn = this._cardElement.querySelector('.elements__like');
        this._trashBtn = this._cardElement.querySelector('.elements__trash-btn');
        this._link = this._cardElement.querySelector('.elements__image');
        this._name = this._cardElement.querySelector('.elements__header')
        this._link.src = this._image;
        this._link.alt = this._header;
        this._name.textContent = this._header;
        this._setEventListeners();
        return this._cardElement;

    }
}



