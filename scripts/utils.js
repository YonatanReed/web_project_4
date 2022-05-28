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

function openPopup(popup) {
  popup.classList.add("popup-box_opened");
  popup.addEventListener("click", closeOnClick);
  document.addEventListener("keydown", closeOnEsc);
}

export { openPopup, closePopup };
