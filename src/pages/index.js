//Nessesary class-imports
import "./index.css";
import Card from "../components/Card.js";
import Api from "../components/Api.js";
import FormValidator from "../components/FormValidator";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWIthConfirmation.js";
import PopupWithForm from "../components/PopupWIthForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  profileInputName,
  profileInputAbout,
  profileForm,
  profileEditionBtn,
  popupSelectors,
  popupProfile,
  popupAvatar,
  popupAddCard,
  formSettings,
  cardForm,
  avatarEditBtn,
  avatar,
  addingCardButton,
  avatarForm,
  popupDeleteCard,
  yesBtn,
} from "../utils/constants.js";

function handleCardDelete(cardId) {
  popupCardDelete.open();
  yesBtn.addEventListener("click", () => {
    apiObject
      .deleteCard(cardId)
      .then(() => {
        this.deleteCard();
        popupCardDelete.close();
      })
      .catch((err) => console.log(`Ошибка.....: ${err}`));
  });
}

function likeFunction() {
  apiObject
    .putLike(this._cardId)
    .then((response) => {
      this.likesChange(response);
    })
    .catch((err) => console.log(`Ошибка.....: ${err}`));
}
function unlikeFunction() {
  apiObject
    .cancelLike(this._cardId)
    .then((response) => {
      this.likesChange(response);
    })
    .catch((err) => console.log(`Ошибка.....: ${err}`));
}
//========================================
function createCard({ cardData, userId }, cardTemplateSelector) {
  const cardObject = new Card({
    cardData,
    cardTemplateSelector,
    handleCardClick: (name, link) => {
      cardClickedPopup.open(name, link);
    },
    handleCardDelete,
    likeFunction,
    unlikeFunction,
    userId,
  });
  const cardElement = cardObject.generateCard();

  return cardElement;
}

export const apiObject = new Api({
  apiUrl: "https://mesto.nomoreparties.co/v1/cohort-57",
  headers: {
    authorization: "a59f181f-9e88-4a95-85fe-0e1fbe79e01c",
    "Content-Type": "application/json",
  },
});
const cardClickedPopup = new PopupWithImage(popupSelectors.scaledImageSelector);
const profileFormValidator = new FormValidator(formSettings, profileForm);
const cardFormValidator = new FormValidator(formSettings, cardForm);
const avatarFormValidator = new FormValidator(formSettings, avatarForm);
const popupCardDelete = new PopupWithConfirmation(
  popupSelectors.cardDeletionSelector
);

const insertUserData = new UserInfo({
  profileNameSelector: ".profile__name",
  profileAboutSelector: ".profile__about",
  avatarSelector: ".profile__avatar",
});

const sbmtProfile = new PopupWithForm({
  popupSelector: popupSelectors.profileSelector,
  handleFormSubmit: (formValues) => {
    sbmtProfile.indicateProgress(true);
    apiObject
      .patchProfile(formValues)
      .then(() => {
        insertUserData.setUserInfo({
          nameToSet: formValues["name"],
          infoToSet: formValues["link"],
        });
        sbmtProfile.close();
      })
      .catch((err) => console.log(`Ошибка:${err}`))
      .finally(sbmtProfile.indicateProgress(false));
  },
});

const sbmtAvatar = new PopupWithForm({
  popupSelector: popupSelectors.avatarSelector,
  handleFormSubmit: (avatarData) => {
    sbmtAvatar.indicateProgress(true);
    apiObject
      .patchAvatar(avatarData)
      .then((resp) => {
        insertUserData.setMyAvatar(resp.avatar);
        sbmtAvatar.close();
      })
      .catch((err) => console.log(`Ошибка:${err}`))
      .finally(() => {
        sbmtAvatar.indicateProgress(false);
      });
  },
});

const cardsSection = new Section(
  {
    renderer: (cardData, userId) => {
      const cardElement = createCard(
        {
          cardData,
          userId,
        },
        "#card-template"
      );
      cardsSection.addItem(cardElement);
    },
  },
  ".elements__list"
);

const cardEditionPopup = new PopupWithForm({
  popupSelector: popupSelectors.addCardSelector,
  handleFormSubmit: (imgValues) => {
    cardEditionPopup.indicateProgress(true);
    apiObject
      .postCard(imgValues)
      .then((response) => {
        const myCard = createCard(
          {
            cardData: response,
            userId: response["owner"]["_id"],
          },
          "#card-template"
        );
        cardsSection.addItem(myCard);
      })
      .then(() => {
        cardEditionPopup.close();
      })
      .catch((err) => console.log(`Ошибка.....: ${err}`))
      .finally(cardEditionPopup.indicateProgress(false));
  },
});

const promisesMassive = [
  apiObject.getUserInfo(),
  apiObject.getInitialCardList(),
];

Promise.all(promisesMassive)
  .then(([userInfo, cardsArr]) => {
    insertUserData.setUserInfo({
      nameToSet: userInfo.name,
      infoToSet: userInfo.about,
    });
    insertUserData.setMyAvatar(userInfo.avatar);

    const userId = userInfo["_id"];
    //Отрисуем все загруженные с сервера карточки на основании массива с данными карточек
    cardsSection.renderItems(cardsArr, userId);
  })
  .catch((err) => console.log(`Ошибка.....: ${err}`));
//========================================
//Cлушаем закрытие попапа с картинкой
cardClickedPopup.setEventListeners();
//Слушаем удаление карточки
popupCardDelete.setEventListeners();
//Слушаем субмит аватара
sbmtAvatar.setEventListeners();

// //Включаем валидацию всех форм
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

//Listening to profile+avatar edition, card-creation + card-deletion button
addingCardButton.addEventListener("click", function () {
  cardFormValidator.resetValidation();

  cardEditionPopup.open();
});

profileEditionBtn.addEventListener("click", function () {
  sbmtProfile.open();
  const user = insertUserData.getUserInfo();
  profileInputName.value = user.collectedName;
  profileInputAbout.value = user.collectedAbout;
  profileFormValidator.resetValidation();
});
avatarEditBtn.addEventListener("click", () => {
  popupAvatar.classList.add("popup_opened");
  avatarFormValidator.resetValidation();
});
avatar.addEventListener("click", () => {
  popupAvatar.classList.add("popup_opened");
  avatarFormValidator.resetValidation();
});

//Слушаем субмит профиоя
sbmtProfile.setEventListeners();
//Слушаем субмит карточки
cardEditionPopup.setEventListeners();
