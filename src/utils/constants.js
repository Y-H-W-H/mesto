export {
  formSettings,
  popupSelectors,
  profileEditionBtn,
  popupProfile,
  profileForm,
  profileInputName,
  profileInputAbout,
  popupAddCard,
  cardForm,
  addingCardButton,
  yesBtn,
  avatar,
  popupAvatar,
  popupDeleteCard,
  avatarForm,
  avatarEditBtn,
};
//______________________________________________________

const formSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitBtnSelector: ".popup__submit-button",

  submitButtonDisabledSelector: "popup__submit-button-disabled",
  popupInputErrorSelector: "popup__input-error",
  inputErrorClass: "popup__input_type_error",
  errorMessage: "А ну-ка заполни правильно",
};

const popupSelectors = {
  clearPopupSelector: ".popup",
  profileSelector: ".popup_profile",
  avatarSelector: ".popup_avatar",
  scaledImageSelector: ".popup_scaled",
  addCardSelector: ".popup_add-card",
  cardDeletionSelector: ".popup_delete-card",
};

const avatar = document.querySelector(".profile__avatar");
const avatarEditBtn = document.querySelector(".profile__avatar-edit");

const popupAvatar = document.querySelector(popupSelectors.avatarSelector);

const yesBtn = document.querySelector(".popup__submit-button_del-card");
const profileEditionBtn = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_profile");
const profileForm = popupProfile.querySelector(".popup__form_profile");
const avatarForm = popupAvatar.querySelector(".popup__form_avatar");

const profileInputName = popupProfile.querySelector(".popup__input_name");
const profileInputAbout = popupProfile.querySelector(".popup__input_about");

const popupAddCard = document.querySelector(popupSelectors.addCardSelector);
const popupDeleteCard = document.querySelector(
  popupSelectors.cardDeletionSelector
);
const cardForm = popupAddCard.querySelector(".popup__form_card");
const addingCardButton = document.querySelector(".profile__add-button");
