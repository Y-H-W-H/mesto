import { createCard } from '../pages/index.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWIthForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
export {
    cardList,
    formSettings,
    popupSelectors,
    insertUserData,
    profileEditionBtn,
    popupProfile,
    profileForm,
    profileInputName,
    profileInputAbout,
    popupAddCard,
    cardForm,
    addingCardButton,
    cardClicked,
    sbmtProfile,
    formSubmission,
    cardsSection,
    profileFormValidator,
    cardFormValidator,
    popupClosureListening
}


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
const cardClicked = new PopupWithImage(popupSelectors.scaledImageSelector);

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
        const newCard = createCard({
            name: formValues['input-name'],
            link: formValues['input-about']
        });
        cardsSection.addItem(newCard);
    }

}, '.elements__list');
const cardsSection = new Section({
    items: cardList,
    renderer: (element) => {

        cardsSection.addItem(createCard(element));

    }
}, '.elements__list');

const profileFormValidator = new FormValidator(formSettings, profileForm);
const cardFormValidator = new FormValidator(formSettings, cardForm);


const popupClosureListening = new PopupWithImage(popupSelectors.scaledImageSelector);