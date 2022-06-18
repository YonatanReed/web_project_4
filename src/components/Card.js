class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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

    const imageElement = this._element.querySelector(".element__image");
    const paragraphElement = this._element.querySelector(".element__paragraph");

    imageElement.src = this._image;
    paragraphElement.textContent = this._title;
    imageElement.alt = this._title;

    return this._element;
  }

  _setEventListeners() {
    this._like.addEventListener("click", this._toggleLike);
    this._deleteBtn.addEventListener("click", this._deleteElement);
    this._element
      .querySelector(".element__image")
      .addEventListener("click", this._handleCardClick);
  }
  _toggleLike = () => this._like.classList.toggle("element__like_active");
  _deleteElement = () => this._element.remove();
}

export default Card;
