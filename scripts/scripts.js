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

openFormEditButton.addEventListener("click", function () {
  openPopup(popupEdit);
});

openFormEditButton.addEventListener("click", fillProfileForm);

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

closeFormAddButton.addEventListener("click", () => resetForm(addForm));

closePictureButton.addEventListener("click", function () {
  closePopup(popupBoxImage);
});

editForm.addEventListener("submit", handleEditFormSubmit);
addForm.addEventListener("submit", handleAddFormSubmit);

function openPopup(popup) {
  popup.classList.add("popup-box_opened");
  popup.addEventListener("click", closeOnClick);
  document.addEventListener("keydown", closeOnEsc);
}

function closeOnClick(e) {
  if (e.target.classList.contains("popup-box")) {
    closePopup(e.target);
  }
}

function closeOnEsc(e) {
  if (e.key === "Escape") {
    const popupOpenedType = document.querySelector(".popup-box_opened");
    closePopup(popupOpenedType);
  }
}

function closePopup(popup) {
  popup.classList.remove("popup-box_opened");
  popup.removeEventListener("click", closeOnClick);
  document.removeEventListener("keydown", closeOnEsc);
}

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

const formObject = {
  formSelector: ".form",
  inputSelector: ".form__input",
  fieldsetSelector: ".form__set",
  submitButtonSelector: ".form__save-btn",
  inactiveButtonClass: "form__save-btn_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__error_visible",
};

function resetForm(form) {
  const buttonElement = form.querySelector(".form__save-btn");
  form.reset();
  enableButtron(buttonElement, formObject);
}

function createCard(data) {
  const templateElement = document.querySelector("#temple-element").content;
  const cardElement = templateElement.querySelector(".element").cloneNode(true);
  const cardTitle = cardElement.querySelector(".element__paragraph");
  const cardPhoto = cardElement.querySelector(".element__image");

  cardTitle.textContent = data.name;
  cardPhoto.src = data.link;
  cardPhoto.alt = data.name;

  const like = cardElement.querySelector(".element__like");
  like.addEventListener("click", toggleElementLikeActive);
  function toggleElementLikeActive() {
    like.classList.toggle("element__like_active");
  }
  const deleteBtn = cardElement.querySelector(".element__delete-icon ");
  deleteBtn.addEventListener("click", deleteElement);
  function deleteElement() {
    cardElement.remove();
  }
  cardElement
    .querySelector(".element__image")
    .addEventListener("click", openPicturePopup);
  function openPicturePopup() {
    const modal = document.querySelector(".popup-box_image");
    const modalImg = document.querySelector(".popup-box__image");
    const captionText = document.querySelector(".popup-box__caption");
    const imageElement = cardElement.querySelector(".element__image");
    openPopup(modal);
    modalImg.src = imageElement.src;
    modalImg.alt = imageElement.alt;
    captionText.innerHTML = cardElement.querySelector(
      ".element__paragraph"
    ).textContent;
  }
  return cardElement;
}

initialCards.forEach(function (element) {
  elements.append(createCard(element));
});
