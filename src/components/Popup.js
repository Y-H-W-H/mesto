
export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    };
    open() {
        this._popup.classList.add('popup_opened');
        this._popup.classList.add('popup_emerging')
        window.addEventListener('keydown', this._handleEscClose);

    };
    close() {
        this._popup.classList.remove('popup_opened');
        window.removeEventListener('keydown', this._handleEscClose);
    };

    _handleEscClose(event) {
        //Логика закрытия попапа клавишей Esc
        const key = event.key;
        if (key === "Escape") {
            this.close();
        };
    };

    setEventListeners() {
        //ставит слушатель клика по иконке закрытия попапа, а также по клику на тьму
        this._popup.addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup_opened')) {
                this.close();
            };
            if (event.target.classList.contains('popup__close-button')) {
                this.close();
            };

        });


    };

}
