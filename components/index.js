
//Nessesary class-imports
// index.js

import '../pages/index.css'; // добавьте импорт главного файла стилей
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithForm from './PopupWIthForm.js';
import PopupWithImage from './PopupWithImage.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import Popup from "./Popup.js";



//Импорт картинок
// import addButtonImage from '../images/Add-Button.svg';
// import closeIconImage from '../images/Close-icon.svg';
// import editButtontImage from '../images/Edit-Button.svg';
// import lineImage from '../images/Line.png';
// import rectangleImage from '../images/Rectangle.svg';
// import rectagle2Image from '../images/Rectangle.png';
// import trashImage from '../images/Trash.svg';
// import unionImage from '../images/Union.svg';
// import union2Image from '../images/Union@2x.png';
// import vectorImage from '../images/Vector.svg';
// import avatarImage from '../images/avatar.jpg';
// import pershin1Image from '../images/kirill-pershin-1088404-unsplash.png';
// import pershin21Image from '../images/kirill-pershin-1404681-unsplash.png';
// import pershin3Image from '../images/kirill-pershin-1404681-unsplash(1).png';
// import pershin4Image from '../images/kirill-pershin-1556355-unsplash.png';
// import pershin5Image from '../images/kirill-pershin-1556355-unsplash(1).png';
// import logoImage from '../images/logo.svg';

// //Импорт шрифтов

// import InterBlackWoff from '../vendor/fonts/Inter-Black.woff';
// import InterBlackWoff2 from '../vendor/fonts/Inter-Black.woff2';
// import InterBoldWoff from '../vendor/fonts/Inter-Bold.woff';
// import InterBoldWoff2 from '../vendor/fonts/Inter-Bold.woff2';
// import InterMediumWoff from '../vendor/fonts/Inter-Medium.woff';
// import InterMediumWoff2 from '../vendor/fonts/Inter-Medium.woff2';
// import InterRegularWoff from '../vendor/fonts/Inter-Regular.woff';
// import InterRegularWoff2 from '../vendor/fonts/Inter-Regular.woff';

//______________________________________________________
// Initial card-list
const cardList = [
  {
    name: 'Архыз',
    link: 'https://images.unsplash.com/photo-1663417026017-dd3933e19074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&w=1000&q=80'
  },
  {
    name: 'Челябинская область',
    link: 'https://images.unsplash.com/photo-1663474830359-4b622189c6ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&w=1000&q=80'
  },
  {
    name: 'Pramod tiwari',
    link: 'https://images.unsplash.com/photo-1663792804509-26c136d5f7a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80'
  },
  {
    name: 'Роза роз',
    link: 'https://images.unsplash.com/photo-1663848282259-60dda6019692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&w=1000&q=80'
  },
  {
    name: 'Industrial',
    link: 'https://images.unsplash.com/photo-1664072844818-082486c29daf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8&w=1000&q=80'
  },
  {
    name: 'New tech',
    link: 'https://images.unsplash.com/photo-1657214059139-dc58d16118ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&w=1000&q=80'
  },

];
// Здесь пребывают данные, реализующие валидацию форм
const formSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitBtnSelector: '.popup__submit-button',

  submitButtonDisabledSelector: 'popup__submit-button-disabled',
  popupInputErrorSelector: 'popup__input-error',
  inputErrorClass: "popup__input_type_error",
  errorMessage: "А ну-ка заполни правильно"
}

const popupSelectors = {
  clearPopupSelector: '.popup',
  profileSelector: '.popup_profile',
  scaledImageSelector: '.popup_scaled',
  addCardSelector: '.popup_add-card'


}
const insertUserData = new UserInfo({
  profileNameSelector: '.profile__name',
  profileAboutSelector: '.profile__about'
});

const profileEditionBtn = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_profile");
const profileForm = popupProfile.querySelector(".popup__form_profile");
const profileInputName = popupProfile.querySelector(".popup__input_name");
const profileInputAbout = popupProfile.querySelector(".popup__input_about");
const popupAddCard = document.querySelector('.popup_add-card');
const cardForm = popupAddCard.querySelector('.popup__form_card');
const addingCardButton = document.querySelector(".profile__add-button");





const cardsSection = new Section({
  items: cardList,
  renderer: (element) => {
    const cardObject = new Card({
      cardData: element,
      cardTemplateSelector: '#card-template',
      handleCardClick: (name, link) => {
        const cardClicked = new PopupWithImage(popupSelectors.scaledImageSelector);
        cardClicked.open(name, link);
      }
    });

    cardsSection.addItem(cardObject.generateCard());

  }
}, '.elements__list');


//Отрисовать секцию карточек
cardsSection.renderItems();

const sbmtProfile = new PopupWithForm({
  popupSelector: popupSelectors.profileSelector,
  handleFormSubmit: (formValues) => {
    insertUserData.setUserInfo({
      nameToSet: formValues['input-name'],
      infoToSet: formValues['input-about']
    });

  }
});
const formSubmission = new PopupWithForm({
  popupSelector: popupSelectors.addCardSelector,
  handleFormSubmit: (formValues) => {
    const addCardToList = new Section({
      items: [{
        name: formValues['input-name'],
        link: formValues['input-about']
      }],
      renderer: (element) => {
        const cardObject = new Card({
          cardData: element,
          cardTemplateSelector: '#card-template',
          handleCardClick: (name, link) => {
            const cardClicked = new PopupWithImage(popupSelectors.scaledImageSelector);
            cardClicked.open(name, link);
          }
        });

        const cardElement = cardObject.generateCard();
        addCardToList.addItem(cardElement);
      }
    }, '.elements__list');
    addCardToList.renderItems();
  }
});







const profileFormValidator = new FormValidator(formSettings, profileForm);
const cardFormValidator = new FormValidator(formSettings, cardForm);






//Начинаем слушать закрытие попапов всякий раз, когда они открыты
Object.values(popupSelectors).forEach((selector) => {
  const popupClosureListening = new Popup(selector);
  popupClosureListening.setEventListeners();
});

//Установить слушатель на субмит каторчки
formSubmission.setEventListeners();



//Слушаем субмит профиоя
sbmtProfile.setEventListeners();



// //Включаем валидацию всех форм
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

//Listening to profile edition and card creation-button
addingCardButton.addEventListener("click", function () {
  cardFormValidator.resetValidation();
  const popupToOpen = new Popup(popupSelectors.addCardSelector);
  popupToOpen.open();
});

profileEditionBtn.addEventListener("click", function () {
  const popupToOpen = new Popup(popupSelectors.profileSelector);
  popupToOpen.open();
  const user = insertUserData.getUserInfo();
  profileInputName.value = user.collectedName;
  profileInputAbout.value = user.collectedAbout;
  profileFormValidator.resetValidation();
});




