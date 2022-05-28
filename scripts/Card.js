import { openPopup } from "./utils.js";

class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const templateElement = document.querySelector(this._cardSelector).content;
    const cardElement = templateElement
      .querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._like = this._element.querySelector(".element__like");
    this._deleteBtn = this._element.querySelector(".element__delete-icon ");

    this._setEventListeners();

    this._element.querySelector(".element__image").src = this._image;
    this._element.querySelector(".element__paragraph").textContent =
      this._title;
    this._element.querySelector(".element__image").alt = this._title;

    return this._element;
  }

  _setEventListeners() {
    this._like.addEventListener("click", () => this._toggleLike());

    this._deleteBtn.addEventListener("click", () => this._deleteElement());

    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => this._openPicturePopup());
  }

  _toggleLike() {
    this._like.classList.toggle("element__like_active");
  }

  _deleteElement() {
    this._element.remove();
  }

  _openPicturePopup() {
    const modal = document.querySelector(".popup-box_image");
    const modalImg = document.querySelector(".popup-box__image");
    const captionText = document.querySelector(".popup-box__caption");
    const imageElement = this._element.querySelector(".element__image");
    openPopup(modal);
    modalImg.src = imageElement.src;
    modalImg.alt = imageElement.alt;
    captionText.innerHTML = this._element.querySelector(
      ".element__paragraph"
    ).textContent;
  }
}

export default Card;
