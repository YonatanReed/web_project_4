const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const openFormEditButton = document.querySelector(".profile__edit-btn");
const openFormAddButton = document.querySelector(".profile__add-btn");
const editForm = document.querySelector(".form-edit");
const addForm = document.querySelector(".form-add");
const avatarForm = document.querySelector(".form-avatar");
const token = "0b69bf19-42d1-4bf8-9ff1-9675ed788767";
const groupID = "cohort-3-en";
const openEditAvatar = document.querySelector(".profile__edit-picture");

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
  avatarForm,
  formObject,
  token,
  groupID,
  openEditAvatar,
};
