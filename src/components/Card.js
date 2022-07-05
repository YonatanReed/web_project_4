class Card {
  constructor(
    data,
    cardSelector,
    userId,
    handleCardClick,
    handleDeleteButton,
    handleLikeClick
  ) {
    this._title = data.name;
    this._image = data.link;
    this._data = data;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteButton = handleDeleteButton;
    this._handleLikeClick = handleLikeClick;
    this._likes = this._data.likes;
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
    this._likeButton = this._element.querySelector(".element__like"); // new v
    this._likeCounter = this._element.querySelector(".element__like_number"); // new v
    this._setEventListeners();
    const imageElement = this._element.querySelector(".element__image");
    const paragraphElement = this._element.querySelector(".element__paragraph");
    this._renderLikes();
    imageElement.src = this._image;
    paragraphElement.textContent = this._title;
    imageElement.alt = this._title;
    if (this._data.owner["_id"] !== this._userId) {
      this._deleteBtn.removeEventListener("click", this._handleDeleteButton);
      this._deleteBtn.style = "display: none";
    }

    return this._element;
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  _renderLikes() {
    this._likeCounter.textContent = this._likes.length;

    if (this.isLiked()) {
      this._likeButton.classList.add("element__like_active");
    } else {
      this._likeButton.classList.remove("element__like_active");
    }
  }

  updateLikes(likes) {
    this._likes = likes;
    this._renderLikes();
  }

  isLiked() {
    return this._likes.some((user) => user._id === this._userId);
  }

  _toggleLike = () => this._like.classList.toggle("element__like_active");

  _setEventListeners() {
    this._like.addEventListener("click", this._handleLikeClick);
    this._deleteBtn.addEventListener("click", this._handleDeleteButton);
    this._element
      .querySelector(".element__image")
      .addEventListener("click", this._handleCardClick);
  }
}

export default Card;
