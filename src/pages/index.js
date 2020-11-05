
import './index.css';

import {initialCards,
    inputObj,
    editUserOpenButton,
    editCardOpenButton,
    nameInput,
    jobInput,
    popupButton,
    formPlace,
    formProfile,
    template,
    popupCardZoom,
    editUserPopup,
    addCardPopup,
} from '../utils/constants.js';

import {addCard} from '../utils/utils.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

const popupZoomCard = new PopupWithImage(popupCardZoom);
const popupUser = new PopupWithForm(editUserPopup, submitUserForm);
const popupCard = new PopupWithForm(addCardPopup, submitCardForm);
const userInfo = new UserInfo({nameUser: '.profile__initial-name', infoUser: '.profile__initial-profession'});
const formPlaceValidation = new FormValidator(inputObj, formPlace);
const formProfileValidation = new FormValidator(inputObj, formProfile);

const arrCards = new Section({
    items:initialCards, 
    renderer: (item) => {
        return addCard(item, template, popupZoomCard.open.bind(popupZoomCard))
    }
},
'.elements'
);


function submitUserForm () {
    debugger
    userInfo.setUserInfo(popupUser.getInputValues());
    this.close();
}

function submitCardForm () {
    const userData = popupCard.getInputValues();
    const card = addCard(userData, template, popupZoomCard.open.bind(popupZoomCard))
    arrCards.addItem(card);
    this.close();
}

const openUserForm =() => {
    const userName = userInfo.getUserInfo();
    nameInput.value = userName.userName;
    jobInput.value = userName.userJob;
    popupUser.open();
}

const openCardForm =() => {
    popupButton.setAttribute('disabled', true);
    popupButton.classList.add('.popup__button_inactive');
    popupCard.open();
};



formPlaceValidation.enableValidation();
formProfileValidation.enableValidation();



editUserOpenButton.addEventListener('click', openUserForm);
editCardOpenButton.addEventListener('click', openCardForm);

arrCards.renderItems();
