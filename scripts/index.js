
// РАЗДЕЛ 1. ОБЪЯВЛЕНИЕ ГЛОБАЛЬНЫХ ПЕРЕМЕННЫХ И КОНСТАНТ
// ===========================================================

//1.1. Инструментарий для работы с профилем
const profileFrame = document.querySelector('.profile')
const popupProfile = document.querySelector('.popup_profile');
const profileEditionBtn = document.querySelector('.profile__edit-button');
const profileName = profileFrame.querySelector('.profile__name');
const profileAbout = profileFrame.querySelector('.profile__about');
const profileForm = popupProfile.querySelector('.popup__form_profile');
const profileInputName = popupProfile.querySelector('.popup__input_name');
const profileInputAbout = popupProfile.querySelector('.popup__input_about');
//1.2. Инструментарий для добавления карточек
const popupAddCard = document.querySelector('.popup_addCard');
// Ниже в качестве компромисного варианта выбран 'adding' в качестве герундива.
// Т.о. он указывает на 'добавление' как на сущность, и, стало быть, выступает в роли существительного
const addingCardButton = document.querySelector('.profile__add-button');
const cardTitle = popupAddCard.querySelector('.popup__input_title');
const cardLink = popupAddCard.querySelector('.popup__input_link');
const cardForm = popupAddCard.querySelector('.popup__form_card');
const cardTemplate = document.querySelector('#card-template');
const cardsContainer = document.querySelector('.elements__list');
// 1.3. Звенья, обеспечивающие работу просмотра картинок
const popupCardScaled = document.querySelector('.popup_card-scaled');
const popupCardScaledImage = popupCardScaled.querySelector('.popup_card-scaled__image');
const popupCardScaledCloseButton = popupCardScaled.querySelector('.popup_card-scaled__close-button');
const popupCardScaledHeader = popupCardScaled.querySelector('.popup_card-scaled__header');
// 1.4. Сбор коллекции закрывающих попап кнопок
const popupClosureButtons = document.querySelectorAll('.popup__close-button');



// РАЗДЕЛ 2. ОПИСАНИЕ ФУНКЦИЙ, РЕАЛИЗУЮЩИХ КОНТЕНТ СТРАНИЦЫ
// ===========================================================

//2.1. Функция подтверждения профиля
function submitProfileInfo(event) {
  event.preventDefault();
  profileName.textContent = profileInputName.value;
  profileAbout.textContent = profileInputAbout.value;
  wrapPopup(event);
}
//2.2. Универсальные открывашка и закрывашка
function wrapPopup(c) {
  c.target.closest('.popup').classList.remove('popup_opened');
}
function unwrapPopup(o) {
  switch (o.target) {
    case profileEditionBtn: popupProfile.classList.add('popup_opened');
      break;
    case addingCardButton: popupAddCard.classList.add('popup_opened');
      break;
    default: popupCardScaled.classList.add('popup_opened');
  }
}



// РАЗДЕЛ 3. ПРОПИСЫВАНИЕ ФУНКЦИОНАЛА ДЛЯ ГЕНЕРАЦИИ И РЕНДЕРИНГА КАРТОЧЕК
// ======================================================================

//3.1. Общая генеративная функция для карточек
function createCard(header, link) {
  // Взятие узла карточки с его HTML-содержимым
  const newCardNode = cardTemplate.content.cloneNode(true);
  const newCardItem = newCardNode.querySelector('.elements__card');
  const newCardImage = newCardItem.querySelector('.elements__image');
  const newCardHeader = newCardItem.querySelector('.elements__header');
  // Насыщение будущей карточки контентом
  newCardImage.src = link;
  newCardHeader.textContent = header;
  newCardImage.alt = newCardHeader.textContent;
  //Набрасывание слушателей на соответствующие элементы карточки
  const trashBtn = newCardItem.querySelector('.elements__trash-btn');
  trashBtn.addEventListener('click', deleteCard);
  const heartBtn = newCardItem.querySelector('.elements__like');
  heartBtn.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  });
  // Создание формы просмотра каждой генерируемой карточки при клике на картинку
  newCardImage.addEventListener('click', function (clicked) {
    const cardToOpen = clicked.target.closest('.elements__card');
    popupCardScaledImage.src = cardToOpen.querySelector('.elements__image').src;
    popupCardScaledHeader.textContent = cardToOpen.querySelector('.elements__header').textContent;
    unwrapPopup(popupCardScaled);
  });
  return newCardNode;
}
//3.2. Функция добавления уже насыщенной карточки в документ разметки
function prependCard(cardNode) {
  cardsContainer.prepend(cardNode);
}
//3.3. Частная функция, порождающая произвольные карточки по запросу пользователя
function submitCard(event) {
  event.preventDefault();
  prependCard(createCard(cardTitle.value, cardLink.value));
  wrapPopup(event);
}
//3.4. Функция удаления карточки через событие клика по удаляющей кнопке
function deleteCard(ev) {
  ev.target.closest('.elements__card').remove();
}
//3.5. Перебор масс. исх. карточек, итеративно взимаются и реализуются их дефолтные данные
initialCards.forEach((card) => {
  const initLink = card.link;
  const initTitle = card.name;
  prependCard(createCard(initTitle, initLink));
})





// РАЗДЕЛ 4. УСТАНОВКА ГЛОБАЛЬНЫХ СЛУШАТЕЛЕЙ
// =====================================================
//4.1. Слушатель событий на элементы профиля
profileEditionBtn.addEventListener('click', unwrapPopup);
profileForm.addEventListener('submit', submitProfileInfo);
//4.2. Слушатель событий на элементы добавления карточек
addingCardButton.addEventListener('click', unwrapPopup)
cardForm.addEventListener('submit', submitCard);
//4.3. Закрепление слушателя на кнопке закрытия просмотра карточки
Array.from(popupClosureButtons).forEach((t) => t.addEventListener('click', wrapPopup));


