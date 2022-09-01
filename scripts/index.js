let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let form = popup.querySelector('.popup__form');
let closeButton = popup.querySelector('.popup__close-button');
let popupName = popup.querySelector('#popupname');
let popupAbout = popup.querySelector('#popupabout');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');


function openPopup() {
  popup.classList.toggle('popup_opened');
  popupAbout.value = profileAbout.textContent;
  popupName.value = profileName.textContent;

}

function closePopup() {
  popup.classList.remove('popup_opened');

}

function editProfile(event) {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileAbout.textContent = popupAbout.value;
  closePopup();

}
closeButton.addEventListener('click', closePopup);
editButton.addEventListener('click', openPopup);
form.addEventListener('submit', editProfile);