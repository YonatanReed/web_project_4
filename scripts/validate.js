const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  formObject
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formObject.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formObject.errorClass);
};

const hideInputError = (formElement, inputElement, formObject) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(formObject.inputErrorClass);
  errorElement.classList.remove(formObject.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, formObject) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      formObject
    );
  } else {
    hideInputError(formElement, inputElement, formObject);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, formObject) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formObject.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(formObject.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement, formObject) => {
  const inputList = Array.from(
    formElement.querySelectorAll(formObject.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    formObject.submitButtonSelector
  );

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      toggleButtonState(inputList, buttonElement, formObject);
      checkInputValidity(formElement, inputElement, formObject);
    });
  });
};

const enableValidation = (formObject) => {
  const formList = Array.from(
    document.querySelectorAll(formObject.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(
      formElement.querySelectorAll(formObject.fieldsetSelector)
    );
    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset, formObject);
    });
  });
};

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  fieldsetSelector: ".form__set",
  submitButtonSelector: ".form__save-btn",
  inactiveButtonClass: "form__save-btn_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__error_visible",
});
