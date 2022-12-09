

export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(cardElement) {
    this._container.prepend(cardElement);
  }
  renderItems() {
    this._initialArray.forEach((el) => {
      this._renderer(el);
    });
  }

}