import Popup from "./Popup";

class PopupWithImage extends Popup {
  constructor(cardSelector) {
    super(cardSelector);
  }

  open(name, link) {
    const modalImg = this._popup.querySelector(".popup-box__image");
    const captionText = this._popup.querySelector(".popup-box__caption");
    super.open();
    modalImg.alt = name;
    modalImg.src = link;
    captionText.textContent = name;
  }
}

export default PopupWithImage;
