
class FormValidator {
    constructor(inputObj, formElement) {
    this._formSelector = inputObj.formSelector;
    this._inputSelector = inputObj.inputSelector;
    this._submitButtonSelector = inputObj.submitButtonSelector;
    this._inactiveButtonClass = inputObj.inactiveButtonClass;
    this._inputErrorClass = inputObj.inputErrorClass;
    this._errorClass = inputObj.errorClass;
    this._formElement = formElement;
    }

    _showInputError (inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.parentElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
    };

    _hideInputError (inputElement)  {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
    };

    _checkInputValidity (inputElement) {
    if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
    } else {
        this._hideInputError(inputElement);
    }
    };

    _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
        });
    });
    };

    _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
    };


    _setDisabled (state){
        this._buttonElement.disabled = state; 
        this._buttonElement.classList.toggle(this._inactiveButtonClass, state);
    }

    _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
        this._setDisabled(true);
    } else {
        this._setDisabled(false);
    }
    };

    enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._setDisabled(true);
    } );
    this._setEventListeners();
    };
    
}

    export default FormValidator;