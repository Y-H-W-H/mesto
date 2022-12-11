
//Nessesary class-imports
import './index.css'
import Card from '../components/Card.js';
import {
insertUserData,
profileEditionBtn,
profileInputName,
profileInputAbout,
addingCardButton,
cardClicked,
sbmtProfile,
formSubmission,
cardsSection,
profileFormValidator,
cardFormValidator,
popupClosureListening
}
  from '../utils/constants.js'




export function createCard(element) {
  const cardObject = new Card({
    cardData: element,
    cardTemplateSelector: '#card-template',
    handleCardClick: (name, link) => {
      cardClicked.open(name, link);
    }
  });

  const cardElement = cardObject.generateCard();
  return cardElement;
}


//Отрисовать секцию карточек
cardsSection.renderItems();

//Cлушаем закрытие попапа с картинкой
popupClosureListening.setEventListeners();



//Слушаем субмит профиоя
sbmtProfile.setEventListeners();
//Слушаем субмит карточки
formSubmission.setEventListeners();



// //Включаем валидацию всех форм
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

//Listening to profile edition and card creation-button
addingCardButton.addEventListener("click", function () {
  cardFormValidator.resetValidation();

  formSubmission.open();
});

profileEditionBtn.addEventListener("click", function () {
  sbmtProfile.open();
  const user = insertUserData.getUserInfo();
  profileInputName.value = user.collectedName;
  profileInputAbout.value = user.collectedAbout;
  profileFormValidator.resetValidation();
});




