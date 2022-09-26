
// РАЗДЕЛ 1. ОБЪЯВЛЕНИЕ ГЛОБАЛЬНЫХ ПЕРЕМЕННЫХ И КОНСТАНТ
// ===========================================================


//1.1. Инструментарий для работы с профилем
const profileFrame = document.querySelector('.profile')
const popupProfile = document.querySelector('.popup_profile');
const popup = document.getElementById('popupE');
const profileCloseBtn = popupProfile.querySelector('.popup__close-button_profile');
const editProfileBtn = document.querySelector('.profile__edit-button');
const profileName = profileFrame.querySelector('.profile__name');
const profileAbout = profileFrame.querySelector('.profile__about');
const profileForm = popupProfile.querySelector('.popup__form_profile');
//1.2. Инструментарий для работы с карточками
const popupCard = document.querySelector('.popup_card');
const closeCardBtn = popupCard.querySelector('.popup__close-button_card');
const addCardBtn = document.querySelector('.profile__add-button');
const cardTitle = popupCard.querySelector('.popup__input_title');
const cardLink = popupCard.querySelector('.popup__input_link');
const cardForm = popupCard.querySelector('.popup__form_card');
const cardTemplate = document.querySelector('#card-template');
const cardsList = document.querySelector('.elements__list');
const likeBtns = Array.from(cardsList.querySelectorAll('.elements__like'));
const cardBottom = Array.from(cardsList.getElementsByClassName('elements__bottom'));
const trashBtns = Array.from(cardsList.querySelectorAll('.elements__trash-btn'));
// 1.3. Звенья, обеспечивающие работу просмотра картинок
const cardScaled = document.querySelector('.card-scaled');
const cardScaledImage = cardScaled.querySelector('.card-scaled__image');
const cardScaledClose = cardScaled.querySelector('.card-scaled__close');
const cardScaledHeader = cardScaled.querySelector('.card-scaled__header');



// РАЗДЕЛ 2. ОПИСАНИЕ ФУНКЦИЙ, РЕАЛИЗУЮЩИХ КОНТЕНТ СТРАНИЦЫ
// ===========================================================
//2.1. Функции, обрабатывающие профиль
function toggleProfile() {
  popupProfile.classList.toggle('popup_opened');
  popupProfile.querySelector('.popup__input_name').value = '';
  popupProfile.querySelector('.popup__input_about').value = '';
}
function submitProfileInfo(event) {
  event.preventDefault();
  profileName.textContent = popupProfile.querySelector('.popup__input_name').value;
  profileAbout.textContent = popupProfile.querySelector('.popup__input_about').value;
  toggleProfile();



}



// РАЗДЕЛ 3. ПРОПИСЫВАНИЕ ФУНКЦИОНАЛА ДЛЯ ГЕНЕРАЦИИ И РЕНДЕРИНГА КАРТОЧЕК
// ======================================================================
// Общая генеративная функция для карточек
function cardsCreation(l, v) {
  // Взятие узла карточки с его HTML-содержимым
  let newCardNode = cardTemplate.content.cloneNode(true);
  let newCardItem = newCardNode.querySelector('.elements__card');
  let newCardImage = newCardItem.querySelector('.elements__image');
  let newCardHeader = newCardItem.querySelector('.elements__header');
  // Насыщение будущей карточки контентом
  newCardImage.src = v;
  newCardHeader.textContent = l;
  newCardImage.alt = newCardHeader.textContent;
  //Набрасывание слушателей на соответствующие элементы карточки
  let trashBtn = newCardItem.querySelector('.elements__trash-btn');
  trashBtn.onclick = delCard;
  let heartBtn = newCardItem.querySelector('.elements__like');
  heartBtn.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  });
  // Создание формы просмотра каждой генерируемой карточки при клике на картинку
  newCardImage.addEventListener('click', function (clicked) {
    let cardToOpen = clicked.target.closest('.elements__card');
    console.log(cardToOpen);
    cardScaledImage.src = cardToOpen.querySelector('.elements__image').src;
    cardScaledHeader.textContent = cardToOpen.querySelector('.elements__header').textContent;
    cardScaled.classList.add('card-scaled_active');
  });
  toggleCard();
  prependNewCard(newCardNode);
}
// Функция добавления уже насыщенной карточки в документ разметки
function prependNewCard(x) {
  cardsList.prepend(x);
  console.log(cardsList);
}
//Частная функция, порождающая произвольные карточки по запросу пользователя
function createNewCard(event) {
  event.preventDefault();
  cardsCreation(cardTitle.value, cardLink.value);
}
//  Механизм, реализующий открытие/закрытие add-card-интерфейса
function toggleCard() {
  popupCard.classList.toggle('popup_opened');
  popupCard.querySelector('.popup__input_title').value = '';
  popupCard.querySelector('.popup__input_link').value = '';

}
// Функция удаления карточки через событие клика по удаляющей кнопке
function delCard(ev) {
  ev.target.closest('.elements__card').remove();
}
// Перебор масс. исх. карточек, итеративно взимаются и реализуются их дефолтные данные
initialCards.forEach((a) => {
  let initLink = a.link;
  let initTitle = a.name;
  cardsCreation(initTitle, initLink);
})





// РАЗДЕЛ 4. УСТАНОВКА ГЛОБАЛЬНЫХ СЛУШАТЕЛЕЙ
// =====================================================
// Слушатель событий на элементы профиля
editProfileBtn.addEventListener('click', toggleProfile);
profileCloseBtn.addEventListener('click', toggleProfile);
profileForm.addEventListener('submit', submitProfileInfo);

// Слушатель событий на элементы добавления карточек
addCardBtn.addEventListener('click', toggleCard)
closeCardBtn.addEventListener('click', toggleCard);
cardForm.addEventListener('submit', createNewCard);


//Закрепление слушателя на кнопке закрытия просмотра карточки
cardScaledClose.addEventListener('click', function () {
  cardScaled.classList.remove('card-scaled_active');
});


