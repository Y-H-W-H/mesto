

export default class Section {
    constructor({ renderer }, containerSelector) {

        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(cardElement) {
        this._container.prepend(cardElement);
    }
    renderItems(cards, userId) {
        cards.forEach((card) => {
            this._renderer(card, userId)
        });

    }

}