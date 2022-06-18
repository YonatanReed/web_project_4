import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this.submitHandler = submitHandler;
    this._form = this._popup.querySelector(".form");
    this._inputList = Array.from(this._form.querySelectorAll(".form__input"));
  }

  _getInputValues() {
    const inputeValues = {};
    this._inputList.forEach((input) => {
      inputeValues[input.name] = input.value;
    });

    return inputeValues;
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
}

export default PopupWithForm;
