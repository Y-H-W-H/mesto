<<<<<<< HEAD


let profileFrame = document.querySelector('.profile')
let popupProfile = document.querySelector('.popup_profile');
let popup = document.querySelector('.popup');
let closeProfileBtn = popupProfile.querySelector('.popup__close-button_profile');
let editProfileBtn = document.querySelector('.profile__edit-button');
let profileName = profileFrame.querySelector('.profile__name');
let profileAbout = profileFrame.querySelector('.profile__about');
let profileForm = popupProfile.querySelector('.popup__form_profile');
//==========ADD-CARD-TOOLS
=======
let editProfileButton = document.querySelector('.profile__edit-button');
let addCardButton = document.querySelector('.profile__add-button');
let popup = document.querySelector('.popup');
let elementsList = document.querySelector('.elements__list');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
>>>>>>> a3811ab40bce7843cc123f63bd43179916aea0a9

function createPopup(type, header, firstPlaceholder, secondPlaceholder) {
  function submitPopup(event) {
    event.preventDefault();
    if (type === 'editProfile') {
      profileName.textContent = firstInput.value;
      profileAbout.textContent = secondInput.value;
    }
    if (type === 'addCard') {
      elementsList.prepend(addCard(firstInput.value, secondInput.value))
    }
    closePopup();
  }

<<<<<<< HEAD

let popupCard = document.querySelector('.popup_card');
let openCard = document.querySelector('.open-card');
let AllImages = document.querySelectorAll('.elements__image');
let openCardImage = openCard.querySelector('.open-card__image');
let openCardClose = openCard.querySelector('.open-card__close ');
let openCardHeader = openCard.querySelector('.open-card__header');

openCardClose.addEventListener('click', function () { openCard.classList.remove('open-card_active'); });
AllImages.forEach((c) => {
  c.addEventListener('click', function (i) {
    let gG = i.target.closest('.elements__card');
    // console.log(gG);
    console.log(gG.querySelector('.elements__image').src);
    console.log(gG.querySelector('.elements__header').textContent);
    openCardImage.src = gG.querySelector('.elements__image').src;
    openCardHeader.textContent = gG.querySelector('.elements__header').textContent;
    openCard.classList.add('open-card_active');
  }
  )
});


let closeCardBtn = popupCard.querySelector('.popup__close-button_card');
let addCardBtn = document.querySelector('.profile__add-button');
let cardTitle = popupCard.querySelector('.popup__input_title');
let cardLink = popupCard.querySelector('.popup__input_link');
let cardForm = popupCard.querySelector('.popup__form_card');
const cardTemplate = document.querySelector('#card-template');
let cardsList = document.querySelector('.elements__list');
let likeBtns = Array.from(cardsList.querySelectorAll('.elements__like'));
let cardBottom = Array.from(cardsList.getElementsByClassName('elements__bottom'));
const trashBtn = cardTemplate.content.querySelector('.elements__trash-btn');
//==========6 BASIC-CARDS-DIPLAY
const initialCards = [
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
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1657214059139-dc58d16118ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&w=1000&q=80'
  }
];
let cardImages = document.querySelectorAll('.elements__image');

for (i = 0; i < initialCards.length; ++i) {

  cardImages[i].setAttribute("src", initialCards[i].link);

};








function toggleProfile() {

  popupProfile.classList.toggle('popup_opened');

}
function submitProfileInfo(event) {
  event.preventDefault();
  profileName.textContent = popupProfile.querySelector('.popup__input_name').value;
  profileAbout.textContent = popupProfile.querySelector('.popup__input_about').value;
  toggleProfile();


=======
  function closePopup() {
    popup.classList.remove('popup_opened');
    popupContent.remove()
  }

  const popupTemplate = document.querySelector('#popup__template').content;
  const popupContent = popupTemplate.querySelector('#popup__content').cloneNode(true);
  const popupForm = popupContent.querySelector('.popup__form');
  const popupTitle = popupContent.querySelector('.popup__title');
  const firstInput = popupContent.querySelector('#popupname');
  const secondInput = popupContent.querySelector('#popupabout');
  const popupSubmit = popupContent.querySelector('.popup__submit-button');
  const popupClose = popupContent.querySelector('.popup__close-button');

  popupTitle.textContent = header
  if (type === 'editProfile') {
    firstInput.placeholder = firstPlaceholder;
    secondInput.placeholder = secondPlaceholder
    firstInput.value = profileName.textContent;
    secondInput.value = profileAbout.textContent;
  }
  if (type === 'addCard') {
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
>>>>>>> a3811ab40bce7843cc123f63bd43179916aea0a9

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
<<<<<<< HEAD
editProfileBtn.addEventListener('click', toggleProfile);
closeProfileBtn.addEventListener('click', toggleProfile);
profileForm.addEventListener('submit', submitProfileInfo);









function toggleCard() {
  popupCard.classList.toggle('popup_opened');

}
addCardBtn.addEventListener('click', toggleCard)
closeCardBtn.addEventListener('click', toggleCard);
cardForm.addEventListener('submit', submitCardInfo);

cardBottom.forEach((element) => {

  element.prepend(trashBtn.cloneNode(true));
});

let trashBtns = Array.from(cardsList.querySelectorAll('.elements__trash-btn'));
function submitCardInfo(event) {
  event.preventDefault();
  cardsList.prepend(cardTemplate.content.cloneNode(true));
  let cardsItem = cardsList.querySelector('.elements__card');
  cardsItem.querySelector('.elements__image').src = cardLink.value;
  cardsItem.querySelector('.elements__header').textContent = cardTitle.value;
  cardsItem.querySelector('.elements__trash-btn').onclick = delCard;
  heartBtn = cardsItem.querySelector('.elements__like')
  heartBtn.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  })
  likeBtns.unshift(heartBtn);

  toggleCard();
  console.log(trashBtns);


}
function delCard(ev) {
  console.log(ev.target);
  ev.target.closest('.elements__card').remove();
}


trashBtns.forEach((tb) => { tb.addEventListener('click', delCard) });






likeBtns.forEach((like) => {
  like.onclick = function () {
    like.classList.toggle('elements__like_active');
  }
});









=======

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
>>>>>>> a3811ab40bce7843cc123f63bd43179916aea0a9
