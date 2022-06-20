import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import {
  nameInput,
  jobInput,
  openFormEditButton,
  openFormAddButton,
  editForm,
  addForm,
  initialCards,
  formObject,
} from "../utils/constants.js";

// forms
const editPopup = new PopupWithForm(".popup-box_edit", (inputeValues) => {
  userInfo.setUserInfo(inputeValues.name, inputeValues.job);
});

const addPopup = new PopupWithForm(".popup-box_add", (inputeValues) => {
  const newCard = {
    name: inputeValues.title,
    link: inputeValues["image-link"],
  };

  const cardElement = createCard(newCard);
  defaultCardList.prependItem(cardElement);
});

const imagePopup = new PopupWithImage(".popup-box_image");
editPopup.setEventListeners();
addPopup.setEventListeners();
imagePopup.setEventListeners();

const userInfo = new UserInfo({
  userNameSelector: ".profile__name",
  userJobSelector: ".profile__job",
});

function createCard(item) {
  const card = new Card(item, "#template-element", () => {
    imagePopup.open(item.name, item.link);
  });
  const cardElement = card.generateCard();
  return cardElement;
}

// listerners
openFormEditButton.addEventListener("click", function () {
  editPopup.open();
  const zain = userInfo.getUserInfo();
  nameInput.value = zain.name;
  jobInput.value = zain.job;
  editFormValidator.resetErrors();
  editFormValidator.enableButton();
});

openFormAddButton.addEventListener("click", function () {
  addPopup.open();
  addFormValidator.disableButton();
  addFormValidator.resetErrors();
});

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      defaultCardList.addItem(createCard(item));
    },
  },
  ".elements"
);
defaultCardList.renderer();

const editFormValidator = new FormValidator(formObject, editForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(formObject, addForm);
addFormValidator.enableValidation();
