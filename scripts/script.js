


let editButton = document.querySelector('.profile__button_edit');
let saveButton = document.querySelector('popup__button_submit');
let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__form');

let closeButton = document.querySelector('.popup__button_close');
closeButton.addEventListener('click', openPopup);

function openPopup() {

  popup.classList.toggle('popup_invisible');
  popup.classList.toggle('popup_opened');


};


editButton.addEventListener('click', openPopup);








let popupInputs = document.querySelectorAll('.popup__input');
let profileInfo = document.querySelectorAll('.profile__text');

function editProfile(event) {
  event.preventDefault();
  profileInfo[0].textContent = popupInputs[0].value;
  profileInfo[1].textContent = popupInputs[1].value;
  openPopup();

}
form.addEventListener('submit', editProfile);