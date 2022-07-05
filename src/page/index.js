import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import { api } from "../utils/Api.js";
import {
  nameInput,
  jobInput,
  openFormEditButton,
  openFormAddButton,
  editForm,
  addForm,
  avatarForm,
  formObject,
  openEditAvatar,
} from "../utils/constants.js";

// class instances

const userInfo = new UserInfo({
  userNameSelector: ".profile__name",
  userJobSelector: ".profile__job",
  avatarSelector: ".profile__avatar",
});

const cardList = new Section(
  {
    renderer: (item) => {
      cardList.appendItem(createCard(item));
    },
  },
  ".elements"
);

// popups
const editPopup = new PopupWithForm({
  popupSelector: ".popup-box_edit",
  handleSubmit: (data) => {
    editPopup.renderLoading(true);
    api
      .updateUserInfo(data.name, data.job)
      .then(() => {
        userInfo.setUserInfo(data.name, data.job);
        editPopup.close();
      })
      .catch(console.log)
      .finally(() => {
        editPopup.renderLoading(false);
      });
  },
});

const addPopup = new PopupWithForm({
  popupSelector: ".popup-box_add",
  handleSubmit: (inputeValues) => {
    addPopup.renderLoading(true);
    const newCard = {
      name: inputeValues.title,
      link: inputeValues["image-link"],
    };
    api
      .uploadCard(newCard)
      .then((res) => {
        const cardElement = createCard(res);
        cardList.prependItem(cardElement);
        addPopup.close();
      })
      .catch(console.log)
      .finally(() => {
        addPopup.renderLoading(false);
      });
  },
});

const imagePopup = new PopupWithImage(".popup-box_image");

const deletePopup = new PopupWithSubmit(".popup-box_delete");

const avatarPopup = new PopupWithForm({
  popupSelector: ".popup-box_avatar",
  handleSubmit: (data) => {
    avatarPopup.renderLoading(true);
    api
      .updateAvatar(data.avatar)

      .then((res) => {
        userInfo.setAvatar(res.avatar);
        avatarPopup.close();
      })
      .catch(console.log)
      .finally(() => {
        avatarPopup.renderLoading(false);
      });
  },
});

// set event listerners
editPopup.setEventListeners();
addPopup.setEventListeners();
imagePopup.setEventListeners();
avatarPopup.setEventListeners();
deletePopup.setEventListeners();

// enable form validations
const editFormValidator = new FormValidator(formObject, editForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(formObject, addForm);
addFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(formObject, avatarForm);
avatarFormValidator.enableValidation();

// API
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo(userData.name, userData.about, userData["_id"]);
    userInfo.setAvatar(userData.avatar);

    cardList.renderItems(cardsData);
  })
  .catch(console.log);

function createCard(item) {
  const userId = userInfo.getUserInfo().id;
  const card = new Card(
    item,
    "#template-element",
    userId,
    () => {
      imagePopup.open(item.name, item.link);
    },
    () => {
      deletePopup.open();
      deletePopup.setAction(() => {
        deletePopup.renderLoading(true);
        api
          .deleteCard(item._id)
          .then(() => {
            card.removeCard();
          })
          .catch(console.log)
          .finally(() => {
            deletePopup.renderLoading(false);
          });
      });
    },
    () => {
      card.isLiked()
        ? api
            .unLikeCard(item["_id"])
            .then((res) => {
              card.updateLikes(res.likes);
            })
            .catch(console.log)
        : api
            .likeCard(item["_id"])
            .then((res) => {
              card.updateLikes(res.likes);
            })
            .catch(console.log);
    }
  );

  const cardElement = card.generateCard();
  return cardElement;
}

// add button listerners
openFormEditButton.addEventListener("click", function () {
  editPopup.open();
  const info = userInfo.getUserInfo();
  nameInput.value = info.name;
  jobInput.value = info.job;

  editFormValidator.resetErrors();
  editFormValidator.enableButton();
});

openFormAddButton.addEventListener("click", function () {
  addPopup.open();
  addFormValidator.disableButton();
  addFormValidator.resetErrors();
});

openEditAvatar.addEventListener("click", () => {
  avatarPopup.open();
  avatarFormValidator.disableButton();
  avatarFormValidator.resetErrors();
});
