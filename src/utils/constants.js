export const initialCards = [
    {
        name: 'Архыз',
        link:'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link:'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link:'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link:'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link:'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link:'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const inputObj = {
    formSelector: '.popup__container',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__input-error_active',
    errorClass: 'popup__error_visible'
};


export const editUserPopup = document.querySelector('.popup_user'); 
export const editUserOpenButton = document.querySelector('.profile__initial-edit'); 
export const editCardOpenButton = document.querySelector('.profile__button');
export const addCardPopup = document.querySelector('.popup_card'); 
export const nameInput = document.querySelector('.popup__item_el_name'); 
export const jobInput = document.querySelector('.popup__item_el_profession');
export const popupButton = document.querySelector('.popup__button_add-card');
export const formPlace = addCardPopup.querySelector('.popup__profile_card');
export const formProfile = editUserPopup.querySelector('.popup__profile_user');
export const template = document.querySelector('.elements-template').content;
export const popupCardZoom = document.querySelector('.popup-zoom-card');