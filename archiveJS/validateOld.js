//ФУНКЦИИ ПОКАЗА ОШИБКИ ИНПУТА

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

//ФУНКЦИИ СКРЫТИЯ ОШИБКИ ИНПУТА

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = '';
  errorElement.classList.remove('popup__input-error_active');
};

//ПРОВЕРКА НА ВАЛИДНОСТЬ, ПОКАЗ ИЛИ СКРЫТИЕ ОШИБКИ, (ДЕЗ)АКТИВАЦИЯ КНОПКИ ОТПРАВКИ ФОРМЫ

const checkInputValidity = (formElement, inputElement) => {
  const isInputNotValid = !inputElement.validity.valid;
  if (isInputNotValid) {
    const errorMessage = inputElement.validationMessage;
    showInputError(formElement, inputElement, errorMessage);
  } else{
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => !inputElement.validity.valid);
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__button_inactive");
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove("popup__button_inactive");
    buttonElement.removeAttribute("disabled");
  }
};

//устанавливаем обработчики событий для инпутов

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__item'));
  const buttonElement = formElement.querySelector(".popup__button");

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  })
  toggleButtonState(inputList, buttonElement);
}

//Объединяем все объявленные выше ф-ии в последовательность итераций и вызываем их:

const enableValidation = (options) => {
  const formElements = document.querySelectorAll(options.formSelector);
  const formList = Array.from(formElements);
  const formListIterator = (formElement) => {
    const submitFormHandler = (event) => {
      event.preventDefault();
    };
    formElement.addEventListener("submit", submitFormHandler);

    setEventListeners(formElement);
  };

  formList.forEach(formListIterator);
};



enableValidation ({
    formSelector: '.popup__profile',
  });