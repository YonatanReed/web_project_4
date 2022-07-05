import Popup from "./Popup";

class PopupWithSubmit extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._submitButton = this._popup.querySelector(".form__save-btn");
    this._submitButtonText = this._submitButton.textContent;
  }

  setAction(action) {
    this._handleSubmit = action;
  }

  setEventListeners() {
    this._popup.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleSubmit();
    });
    super.setEventListeners();
  }

  renderLoading(isLoading) {
    this._submitButton.textContent = isLoading
      ? "Saving..."
      : this._submitButtonText;
  }
}

export default PopupWithSubmit;
