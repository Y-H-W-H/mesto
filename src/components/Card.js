export default class Card {
  constructor({
    cardData,
    cardTemplateSelector,
    handleCardClick,
    handleCardDelete,
    likeFunction,
    unlikeFunction,

    userId,
  }) {
    this._image = cardData["link"];
    this._header = cardData["name"];
    this._cardId = cardData["_id"];
    this._cardLikes = cardData["likes"];
    this._cardOwnerId = cardData["owner"]["_id"];
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._likeFunction = likeFunction.bind(this);
    this._unlikeFunction = unlikeFunction.bind(this);
    this._myId = userId;
  }
  _updateLikesView(likes) {
    this._cardLikesCounter.textContent = `${likes.length}`;
    if (this._isLiked()) {
      this._likeBtn.classList.add("elements__like_active");
    } else {
      this._likeBtn.classList.remove("elements__like_active");
    }
  }

  likesChange(card) {
    this._cardLikes = card["likes"];
    this._updateLikesView(this._cardLikes);
  }
  _isLiked() {
    return this._cardLikes.some((like) => {
      return like["_id"] === this._myId;
    });
  }
  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".elements__card")
      .cloneNode(true);
    return cardTemplate;
  }

  _likeCard() {
    this._likeFunction();
  }
  _cancelLike() {
    this._unlikeFunction();
  }

  _setEventListeners() {
    this._trashBtn.addEventListener("click", () => {
      this._handleCardDelete(this._cardId);
    });
    this._likeBtn.addEventListener("click", () => {
      if (this._likeBtn.classList.contains("elements__like_active")) {
        this._cancelLike();
      } else {
        this._likeCard();
      }
    });
    this._imageEl.addEventListener("click", () =>
      this._handleCardClick(this._header, this._image)
    );
  }
  deleteCard() {
    this._cardElement.remove();
  }
  generateCard() {
    this._cardElement = this._getTemplate();
    this._likeBlock = this._cardElement.querySelector(".elements__like-block");
    this._likeBtn = this._likeBlock.querySelector(".elements__like");
    this._cardLikesCounter = this._likeBlock.querySelector(
      ".elements__likes-counter"
    );
    this._cardLikesCounter.textContent = `${this._cardLikes.length}`;
    if (this._isLiked()) {
      this._likeBtn.classList.add("elements__like_active");
    }
    this._trashBtn = this._cardElement.querySelector(".elements__trash-btn");
    if (this._cardOwnerId != this._myId) {
      this._trashBtn.style.display = "none";
    }
    this._imageEl = this._cardElement.querySelector(".elements__image");
    this._nameEl = this._cardElement.querySelector(".elements__header");
    this._imageEl.src = this._image;
    this._imageEl.alt = this._header;
    this._nameEl.textContent = this._header;
    this._setEventListeners();
    return this._cardElement;
  }
}
