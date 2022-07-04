import Popup from "./Popup";

class PopupWithSubmit extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._submitButton = this._popup.querySelector(".form__save-btn");
    this._submitButtonText = this._submitButton.textContent;
  }

  setAction(action) {
    this._submitHandler = action;
  }

  setEventListeners() {
    this._popup.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitHandler();
      this.close();
    });
    super.setEventListeners();
  }

  renderLoading(isLoading) {
    isLoading
      ? (this._submitButton.textContent = "Saving...")
      : (this._submitButton.textContent = this._submitButtonText);
  }
}

export default PopupWithSubmit;
