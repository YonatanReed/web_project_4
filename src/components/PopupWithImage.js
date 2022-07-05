import Popup from "./Popup";

class PopupWithImage extends Popup {
  constructor(cardSelector) {
    super(cardSelector);
    this._modalImg = this._popup.querySelector(".popup-box__image");
    this._captionText = this._popup.querySelector(".popup-box__caption");
  }

  open(name, link) {
    super.open();
    this._modalImg.alt = name;
    this._modalImg.src = link;
    this._captionText.textContent = name;
  }
}

export default PopupWithImage;
