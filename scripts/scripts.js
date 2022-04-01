const openFormButton = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup-box");
const closeButton = popup.querySelector(".popup-box__close-btn");
const form = document.querySelector(".form");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");

function toggleFormOpen() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.toggle("popup-box_opened");
}

function toggleFormClose() {
  popup.classList.toggle("popup-box_opened");
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  toggleFormClose();
}

openFormButton.addEventListener("click", toggleFormOpen);
closeButton.addEventListener("click", toggleFormClose);
form.addEventListener("submit", handleProfileFormSubmit);
