let editProfileButton = document.querySelector('.profile__edit-button');
let addCardButton = document.querySelector('.profile__add-button');
let popup = document.querySelector('.popup');
let elementsList = document.querySelector('.elements__list');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

function createPopup(type, header, firstPlaceholder, secondPlaceholder) {
  function submitPopup(event) {
    event.preventDefault();
    if ( type === 'editProfile' ) {
      profileName.textContent = firstInput.value;
      profileAbout.textContent = secondInput.value;
    }
    if ( type === 'addCard' ) {
      elementsList.prepend(addCard(firstInput.value, secondInput.value))
    }
    closePopup();
  }

  function closePopup() {
    popup.classList.remove('popup_opened');
    popupContent.remove()
  }
  
  const popupTemplate = document.querySelector('#popup__content').content;
  const popupContent = popupTemplate.querySelector('#popup__content').cloneNode(true);
  const popupForm = popupContent.querySelector('.popup__form');
  const popupTitle = popupContent.querySelector('.popup__title');
  const firstInput = popupContent.querySelector('#popupname');
  const secondInput = popupContent.querySelector('#popupabout');
  const popupSubmit = popupContent.querySelector('.popup__submit-button');
  const popupClose = popupContent.querySelector('.popup__close-button');

  popupTitle.textContent = header
  if ( type === 'editProfile') {
   firstInput.placeholder = firstPlaceholder;
   secondInput.placeholder = secondPlaceholder
   firstInput.value = profileName.textContent;
   secondInput.value = profileAbout.textContent;
  }
  if ( type === 'addCard') {
   firstInput.placeholder = firstPlaceholder;
   secondInput.placeholder = secondPlaceholder
  }
  popupSubmit.textContent = 'Сохранить';

  popupForm.addEventListener('submit', submitPopup);
  popupClose.addEventListener('click', closePopup);

  return popupContent;
}

function openEditProfilePopup() {
  popup.classList.toggle('popup_opened');
  popup.append(createPopup('editProfile', 'Редактировать профиль', 'Имя', 'Профессия'))
}

function openAddCardPopup() {
  popup.classList.toggle('popup_opened');
  popup.append(createPopup('addCard', 'Новое место', 'Название', 'Ссылку на картинку'))
}

editProfileButton.addEventListener('click', openEditProfilePopup);
addCardButton.addEventListener('click', openAddCardPopup);

const initialCards = [
  {
    name: 'Город',
    link: 'https://cdn.stocksnap.io/img-thumbs/960w/building-balconies_P54QQZ9EYT.jpg'
  },
  {
    name: 'Природа',
    link: 'https://cdn.stocksnap.io/img-thumbs/960w/waterfall-rocks_TENOMV4HPT.jpg'
  },
  {
    name: 'Дорога',
    link: 'https://cdn.stocksnap.io/img-thumbs/960w/rural-road_GDU7FOVX6X.jpg'
  },
  {
    name: 'Озеро',
    link: 'https://cdn.stocksnap.io/img-thumbs/960w/water-mountains_NLWB90SLIT.jpg'
  },
  {
    name: 'Отдых',
    link: 'https://cdn.stocksnap.io/img-thumbs/960w/pool-resort_LDXVE2HVCL.jpg'
  },
  {
    name: 'Мегаполис',
    link: 'https://cdn.stocksnap.io/img-thumbs/960w/modern-building_CDDFKUNH3H.jpg'
  },
]; 

function addCard(cardName, cardLink) {
  const cardTemplate = document.querySelector('#elements__card').content;
  const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true)
  const cardImage = cardElement.querySelector('.elements__image');
  const cardHeader = cardElement.querySelector('.elements__header');
  const cardLikeButton = cardElement.querySelector('.elements__like');
  const cardRemoveButton = cardElement.querySelector('.elements__trash');
  function cardLike(event) {
    event.stopPropagation();
    cardLikeButton.classList.toggle('elements__like_active')
  }
  function cardRemove(event) {
    event.stopPropagation();
    cardElement.remove();
  }
  function cardPopup() {
    popup.classList.toggle('popup_opened');
    popup.append(createCardPopup(cardName, cardLink));
  }
  cardLikeButton.addEventListener('click', cardLike)
  cardRemoveButton.addEventListener('click', cardRemove)
  cardElement.addEventListener('click', cardPopup)
  cardImage.src = cardLink;
  cardImage.alt = cardName;
  cardHeader.textContent = cardName;
  return cardElement;
}

initialCards.map(card => elementsList.append(addCard(card.name, card.link)))

function createCardPopup(cardName, cardLink) {
  function closePopup() {
    popup.classList.remove('popup_opened');
    cardPopup.remove()
  }
  const cardPopupTemplate = document.querySelector('#popup__card').content;
  const cardPopup = cardPopupTemplate.querySelector('#popup__card').cloneNode(true)
  const popupTitle = cardPopup.querySelector('.popup__title--card');
  const popupImage = cardPopup.querySelector('.popup__image');
  const popupClose = cardPopup.querySelector('.popup__close-button--card');
  
  popupImage.src = cardLink;
  popupImage.alt = cardName;
  popupTitle.textContent = cardName

  popupClose.addEventListener('click', closePopup);
  return cardPopup
}