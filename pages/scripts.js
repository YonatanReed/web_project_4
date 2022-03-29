const openFormButton = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup-box");
const closeButton = popup.querySelector(".popup__close-btn");

function toggleForm() {
  popup.classList.toggle("popup-box_opened");
}

openFormButton.addEventListener("click", toggleForm);
closeButton.addEventListener("click", toggleForm);

const form = document.querySelector(".form");

const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__job");

function handleProfileFormSubmit(event) {
  event.preventDefault();
  const nameInput = document.querySelector(".popup__input_type_name");
  const jobInput = document.querySelector(".popup__input_type_job");

  profileName.textContent = nameInput.value;
  profileTitle.textContent = jobInput.value;
  toggleForm();
}

form.addEventListener("submit", handleProfileFormSubmit);
