import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
// ===========================================================
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
// Здесь пребывают те данные и функционал, реализующие валидацию форм
const formSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitBtnSelector: '.popup__submit-button',

  submitButtonDisabledSelector: 'popup__submit-button-disabled',
  popupInputErrorSelector: 'popup__input-error',
  inputErrorClass: "popup__input_type_error",
  errorMessage: "А ну-ка заполни правильно"

}
//1.1. Инструментарий для работы с профилем
const profileFrame = document.querySelector(".profile");
const profileEditionBtn = document.querySelector(".profile__edit-button");
const profileName = profileFrame.querySelector(".profile__name");
const profileAbout = profileFrame.querySelector(".profile__about");

const popupProfile = document.querySelector(".popup_profile");
const popupCardScaled = document.querySelector(".popup_scaled");

const popupProfileCloseButton = popupProfile.querySelector(
  ".popup__close-button_profile"
);
const profileForm = popupProfile.querySelector(".popup__form_profile");
const profileInputName = popupProfile.querySelector(".popup__input_name");
const profileInputAbout = popupProfile.querySelector(".popup__input_about");

const cardListContainer = document.querySelector(".elements__list");


const popupAddCard = document.querySelector('.popup_add-card');
const cardForm = popupAddCard.querySelector('.popup__form_card');

const addingCardButton = document.querySelector(".profile__add-button");
const popupAddCardCloseButton = popupAddCard.querySelector(".popup__close-button_add-card");
const popupCardScaledCloseButton = popupCardScaled.querySelector(".popup__close-button_scaled");

const forms = Array.from(document.querySelectorAll(formSettings.formSelector));
const popups = document.querySelectorAll('.popup');



const cardLink = popupAddCard.querySelector(".popup__input_link");
const cardTitle = popupAddCard.querySelector(".popup__input_title");

const scaledImage = popupCardScaled.querySelector('.popup__image-scaled');
const scaledImageHeader = popupCardScaled.querySelector('.popup__header-scaled');

profileInputName.value = profileName.textContent;
profileInputAbout.value = profileAbout.textContent;


//Функция открытия любого поп-апа
function openPopup(popUp) {
  popUp.classList.add('popup_opened');
  window.addEventListener('keydown', onPressEsc);
  window.addEventListener('click', onClickOverlay);

}

function closePopup(popUp) {
  popUp.classList.remove('popup_opened');
  window.removeEventListener('keydown', onPressEsc);
  window.removeEventListener('click', onClickOverlay)
}


popups.forEach((popup) => popup.addEventListener('mousedown', (event) => {

  if (event.target.classList.contains('popup_opened')) {
    closePopup(popup);
  }
  if (event.target.classList.contains('popup__close-button')) {
    closePopup(popup);
  }

}))



//Функция подтверждения профиля
function submitProfileInfo(event) {
  event.preventDefault();
  profileName.textContent = profileInputName.value;
  profileAbout.textContent = profileInputAbout.value;
  closePopup(popupProfile);
}

//Общая генеративная функция для карточек
function postCard(dataMassive) {
  dataMassive.forEach((data) => {
    const cardObject = new Card(data, '#card-template', handleCardClick);
    const card = cardObject.generateCard();
    cardListContainer.prepend(card);
  });

}

function handleCardClick(name, link) {
  scaledImage.src = link;
  scaledImageHeader.alt = name;
  scaledImageHeader.textContent = name;
  openPopup(popupCardScaled);
}


//Функция добавления пользователькой карточки, использующая пользовательские инпуты в качестве массива для postCard
function submitCard(evt) {
  evt.preventDefault();

  postCard([{
    name: cardTitle.value,
    link: cardLink.value
  }])
  cardForm.reset();
  closePopup(popupAddCard);
}

//Функция закрытия поп-апа по клавише ESC
function onPressEsc(event) {
  const key = event.key;
  if (key === "Escape") {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}
//Функция закрытия поп-апа по клику на оверлэй
function onClickOverlay(event) {
  if (!event.target.classList.contains("popup")) return;
  const popup = event.target.closest(".popup");
  if (!popup) return;
  closePopup(popup);
}

//Вызов общей генеративной функции для исходного массива карточек
postCard(cardList);





// //Включаем валидацию всех форм
forms.forEach((form) => {
  const thisFormValidator = new FormValidator(formSettings, form);
  thisFormValidator.enableValidation();
  return thisFormValidator;
})





//______________________________________________________
profileEditionBtn.addEventListener("click", function () {
  const validityObject = new FormValidator(formSettings, profileForm);
  validityObject.resetValidation();
  openPopup(popupProfile);

});
profileForm.addEventListener("submit", (evt) => {
  submitProfileInfo(evt)
});
addingCardButton.addEventListener("click", function () {
  const valObj = new FormValidator(formSettings, cardForm);
  valObj.resetValidation();
  openPopup(popupAddCard);
  cardForm.addEventListener("submit", (event) => submitCard(event));




});



