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
const TemplateElement = document.querySelector("#temple-element").content;
const userElement = TemplateElement.querySelector(".element").cloneNode(true);
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
  toggleFormOpen(popupEdit);
});

openFormAddButton.addEventListener("click", function () {
  toggleFormOpen(popupAdd);
});

closeFormEditButton.addEventListener("click", function () {
  toggleFormClose(popupEdit);
});
closeFormAddButton.addEventListener("click", function () {
  toggleFormClose(popupAdd);
});

editForm.addEventListener("submit", handleEditFormSubmit);
addForm.addEventListener("submit", handleAddFormSubmit);
closePictureButton.addEventListener("click", togglePicturePopup);

function toggleFormOpen(popup) {
  popup.classList.toggle("popup-box_opened");
}

function toggleFormClose(popup) {
  popup.classList.toggle("popup-box_opened");
}

function togglePicturePopup() {
  popupBoxImage.classList.toggle("popup-box_opened");
}

function handleEditFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  toggleFormClose(popupEdit);
}

function handleAddFormSubmit(event) {
  const TemplateElement = document.querySelector("#temple-element").content;
  const userElement = TemplateElement.querySelector(".element").cloneNode(true);
  event.preventDefault();
  userElement.querySelector(".element__paragraph").textContent =
    titileInput.value;
  userElement.querySelector(".element__image").src = imageLinkInput.value;
  elements.prepend(userElement);

  createElement(userElement);
  addForm.reset();
  toggleFormClose(popupAdd);
}

function createElement(userElement) {
  const like = userElement.querySelector(".element__like");
  like.addEventListener("click", toggleElementLikeActive);

  function toggleElementLikeActive() {
    like.classList.toggle("element__like_active");
  }

  const deleteBtn = userElement.querySelector(".element__delete-icon ");
  deleteBtn.addEventListener("click", deleteElement);

  function deleteElement() {
    userElement.remove();
  }

  userElement
    .querySelector(".element__image")
    .addEventListener("click", openPicturePopup);

  function openPicturePopup() {
    const modal = document.querySelector(".popup-box_image");
    const modalImg = document.querySelector(".popup-box__image");
    const captionText = document.querySelector(".caption");

    console.log(modalImg);
    modal.classList.toggle("popup-box_opened");

    modalImg.src = userElement.querySelector(".element__image").src;
    captionText.innerHTML = userElement.querySelector(
      ".element__paragraph"
    ).textContent;
  }
}

initialCards.forEach(function (element) {
  const TemplateElement = document.querySelector("#temple-element").content;
  const userElement = TemplateElement.querySelector(".element").cloneNode(true);
  userElement.querySelector(".element__image").src = element.link;
  userElement.querySelector(".element__paragraph").textContent = element.name;
  userElement.querySelector(".element__image").alt = element.name;

  elements.append(userElement);
  createElement(userElement);
});
