import Card from './Card.js'
import FormValidator from './FormValidator.js'

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const inputObj = {
    formSelector: '.popup__container',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__input-error_active',
    errorClass: 'popup__error_visible'
};

const saveEditUserForm = document.querySelector('.popup__profile'); 



const editUserPopup = document.querySelector('.popup_user'); 
const formProfile = editUserPopup.querySelector('.popup__profile_user');
const editUserOpenButton = document.querySelector('.profile__initial-edit'); 
const editUserCloseButton = document.querySelector('.popup__close_user'); 
const nameInput = document.querySelector('.popup__item_el_name'); 
const jobInput = document.querySelector('.popup__item_el_profession');
const profileName = document.querySelector('.profile__initial-name'); 
const profileJob = document.querySelector('.profile__initial-profession');  


const addCardPopup = document.querySelector('.popup_card'); 
const formPlace = addCardPopup.querySelector('.popup__profile_card');
const editCardOpenButton = document.querySelector('.profile__button');
const addCardCloseButton = document.querySelector('.popup__close_card'); 

const template = document.querySelector('.elements-template').content;
const cards = document.querySelector('.elements');
const inputCardName = document.querySelector('.popup__item_el_place'); 
const inputCardLink = document.querySelector('.popup__item_el_link');

const addZoomCloseButton = document.querySelector('.popup__close_zoom');
const popupCardZoom = document.querySelector('.popup-zoom-card');


const escCode = "Escape";


const formPlaceValidation = new FormValidator(inputObj, formPlace);
const formProfileValidation = new FormValidator(inputObj, formProfile);
formPlaceValidation.enableValidation();
formProfileValidation.enableValidation();

initialCards.forEach(({name, link}) => {
    const card = new Card ({name, link}, template);
    const element = card.getElement();
    cards.append(element);
})

formPlace.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const nameValue = inputCardName.value;
    const linkValue = inputCardLink.value;
    const newCard = {
        name: nameValue,
        link: linkValue,
    }
    formPlace.reset();

    const card = new Card(newCard, template);
    const element = card._generateCard();
    popupClose(addCardPopup, evt);
    cards.prepend(element);
});



const loadUserData = () =>{
    nameInput.value = profileName.textContent.trim();
    jobInput.value = profileJob.textContent.trim();
}

const saveUserData = () =>{
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
} 
const hendler = (event, popup, code) => {
    console.log(1);
    if (event.key===code) {
        popupClose(popup);} 
};

const listenerPopupClose = (code, popup) => {
    document.onkeydown = (event) => hendler(event, popup, code);
}


const popupOpen = (popup) => {
    popup.classList.add('popup_is-opened');
    listenerPopupClose(escCode, popup);
};

const validateReset = (popup) => {
    const inputList = Array.from(popup.querySelectorAll('.popup__item'));

    inputList.forEach((inputElement) => {
    const errorElement = popup.querySelector(`#${inputElement.id}-error`);
    if (errorElement.classList.contains('popup__input-error_active')) {
        errorElement.classList.remove('popup__input-error_active')
    }
    })
}

const popupClose = (popup) => { 
    popup.classList.remove('popup_is-opened');
    validateReset(popup);
    document.onkeydown = null;
} 

const popupCloseByClickOnOverlayUser = (event) => { 
    if (event.target!=event.currentTarget) { 
        return 
    } 
    popupClose(editUserPopup, event); 
} 

const popupCloseByClickOnOverlayCard = (event) => { 
    if (event.target!=event.currentTarget) { 
        return 
    } 
    popupClose(addCardPopup, event); 
} 

const popupCloseByClickOnOverlayZoom = (event) => { 
    if (event.target!=event.currentTarget) { 
        return 
    } 
    popupClose(popupCardZoom, event); 
} 

const submitUserEditForm = (event) => { 
    event.preventDefault(); 
    saveUserData();
    popupClose(editUserPopup);
} 

const openUserEditPopup = () => {
    loadUserData();
    popupOpen(editUserPopup);
}

const openAddCardPopup = () => { 
    popupOpen(addCardPopup); 
} 

editUserOpenButton.addEventListener('click', openUserEditPopup)  
editUserCloseButton.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
        popupClose(editUserPopup, event);
      }
} )
editUserPopup.addEventListener('click', popupCloseByClickOnOverlayUser) 
saveEditUserForm.addEventListener('submit', submitUserEditForm) 
editCardOpenButton.addEventListener('click', openAddCardPopup)  
addCardCloseButton.addEventListener('click', (event) => popupClose(addCardPopup, event)) 
addZoomCloseButton.addEventListener('click', (event) => popupClose(popupCardZoom, event))
addCardPopup.addEventListener('click', popupCloseByClickOnOverlayCard) 
popupCardZoom.addEventListener('click', popupCloseByClickOnOverlayZoom) 


export {popupOpen, popupCardZoom};