

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(popupSelector);
  };
  open() {
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', (event) => { this._handleEscClose(event) });

  };
  close() {
    this._popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', (event) => { this._handleEscClose(event) });
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
