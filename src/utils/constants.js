const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const openFormEditButton = document.querySelector(".profile__edit-btn");
const openFormAddButton = document.querySelector(".profile__add-btn");
const editForm = document.querySelector(".form-edit");
const addForm = document.querySelector(".form-add");

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

export {
  nameInput,
  jobInput,
  openFormEditButton,
  openFormAddButton,
  editForm,
  addForm,
  initialCards,
  formObject,
};
