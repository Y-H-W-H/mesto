
//Nessesary imports
import Popup from './Popup.js'
import '../pages/index.css';
import {
  popupSelectors,
  profileEditionBtn,
  profileInputName,
  profileInputAbout,
  addingCardButton,
  formSubmission,
  cardsSection,
  insertUserData,
  sbmtProfile,
  profileFormValidator,
  cardFormValidator
} from './constants.js'

// ===========================
// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
import addButtonImage from '../images/Add-Button.svg';
import closeIconImage from '../images/Close-icon.svg';
import editButtontImage from '../images/Edit-Button.svg';
import lineImage from '../images/Line.png';
import rectangleImage from '../images/Rectangle.svg';
import rectagle2Image from '../images/Rectangle.png';
import trashImage from '../images/Trash.svg';
import unionImage from '../images/Union.svg';
import union2Image from '../images/Union@2x.png';
import vectorImage from '../images/Vector.svg';
import avatarImage from '../images/avatar.jpg';
import pershin1Image from '../images/kirill-pershin-1088404-unsplash.png';
import pershin21Image from '../images/kirill-pershin-1404681-unsplash.png';
import pershin3Image from '../images/kirill-pershin-1404681-unsplash(1).png';
import pershin4Image from '../images/kirill-pershin-1556355-unsplash.png';
import pershin5Image from '../images/kirill-pershin-1556355-unsplash(1).png';
import logoImage from '../images/logo.svg';

//Импорт шрифтов

import InterBlackWoff from '../vendor/fonts/Inter-Black.woff';
import InterBlackWoff2 from '../vendor/fonts/Inter-Black.woff2';
import InterBoldWoff from '../vendor/fonts/Inter-Bold.woff';
import InterBoldWoff2 from '../vendor/fonts/Inter-Bold.woff2';
import InterMediumWoff from '../vendor/fonts/Inter-Medium.woff';
import InterMediumWoff2 from '../vendor/fonts/Inter-Medium.woff2';
import InterRegularWoff from '../vendor/fonts/Inter-Regular.woff';
import InterRegularWoff2 from '../vendor/fonts/Inter-Regular.woff';

//______________________________________________________


//Отрисовать секцию карточек
cardsSection.renderItems();

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



