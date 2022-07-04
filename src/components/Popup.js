class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector(".popup-box__close-btn");
  }

  open() {
    this._popup.classList.add("popup-box_opened");
    this._popup.addEventListener("mousedown", this._handleClickClose);
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup-box_opened");
    this._popup.removeEventListener("mousedown", this._handleClickClose);
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleClickClose = (e) => {
    if (e.target.classList.contains("popup-box")) {
      this.close();
    }
  };

  _handleEscClose = (e) => {
    if (e.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._closeButton.addEventListener("click", () => this.close());
  }
}

export default Popup;
