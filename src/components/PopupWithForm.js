import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor({ popupSelector, submitHandler }) {
    super(popupSelector);
    this.submitHandler = submitHandler;
    this._form = this._popup.querySelector(".form");
    this._inputList = Array.from(this._form.querySelectorAll(".form__input"));
    this._submitButton = this._popup.querySelector(".form__save-btn");
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    const inputeValues = {};
    this._inputList.forEach((input) => {
      inputeValues[input.name] = input.value;
    });

    return inputeValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.submitHandler(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(isLoading) {
    isLoading
      ? (this._submitButton.textContent = "Saving...")
      : (this._submitButton.textContent = this._submitButtonText);
  }
}

export default PopupWithForm;
