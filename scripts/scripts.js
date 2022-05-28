import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openPopup, closePopup } from "./utils.js";

const popupEdit = document.querySelector(".popup-box_edit");
const popupAdd = document.querySelector(".popup-box_add");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const openFormEditButton = document.querySelector(".profile__edit-btn");
const openFormAddButton = document.querySelector(".profile__add-btn");
const closeFormEditButton = popupEdit.querySelector(".popup-box__close-btn");
const closeFormAddButton = popupAdd.querySelector(".popup-box__close-btn");
const editForm = popupEdit.querySelector(".form-edit");
const titileInput = document.querySelector(".form__input_type_title");
const imageLinkInput = document.querySelector(".form__input_type_image-link");
const elements = document.querySelector(".elements");
const addForm = document.querySelector(".form-add");
const popupBoxImage = document.querySelector(".popup-box_image");
const closePictureButton = popupBoxImage.querySelector(".popup-box__close-btn");

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const formObject = {
  inputSelector: ".form__input",
  fieldsetSelector: ".form__set",
  submitButtonSelector: ".form__save-btn",
  inactiveButtonClass: "form__save-btn_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__error_visible",
};

openFormEditButton.addEventListener("click", function () {
  openPopup(popupEdit);
  fillProfileForm();
});

openFormAddButton.addEventListener("click", function () {
  openPopup(popupAdd);
});

openFormAddButton.addEventListener("click", () => resetForm(addForm));

closeFormEditButton.addEventListener("click", function () {
  closePopup(popupEdit);
});
closeFormAddButton.addEventListener("click", function () {
  closePopup(popupAdd);
});

closePictureButton.addEventListener("click", function () {
  closePopup(popupBoxImage);
});

editForm.addEventListener("submit", handleEditFormSubmit);
addForm.addEventListener("submit", handleAddFormSubmit);

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function handleEditFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

function handleAddFormSubmit(event) {
  event.preventDefault();

  const newCard = {
    name: titileInput.value,
    link: imageLinkInput.value,
  };

  elements.prepend(createCard(newCard));
  resetForm(addForm);
  closePopup(popupAdd);
}

function resetForm(form) {
  const buttonElement = form.querySelector(".form__save-btn");
  form.reset();
  addFormValidator.disableButton();
}

function createCard(element) {
  const card = new Card(element, "#template-element");
  const cardElement = card.generateCard();
  return cardElement;
}

initialCards.forEach(function (element) {
  elements.append(createCard(element));
});

const editFormValidator = new FormValidator(formObject, editForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(formObject, addForm);
addFormValidator.enableValidation();
