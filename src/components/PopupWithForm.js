import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmit }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
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
      this._handleSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(isLoading) {
    this._submitButton.textContent = isLoading
      ? "Saving..."
      : this._submitButtonText;
  }
}

export default PopupWithForm;
