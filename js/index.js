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

const saveEditUserForm = document.querySelector('.popup__profile'); 
const editUserPopup = document.querySelector('.popup_user'); 
const addCardPopup = document.querySelector('.popup_card'); 
const editUserOpenButton = document.querySelector('.profile__initial-edit'); 
const editCardOpenButton = document.querySelector('.profile__button');
const editUserCloseButton = document.querySelector('.popup__close_user'); 
const nameInput = document.querySelector('.popup__item_el_name'); 
const jobInput = document.querySelector('.popup__item_el_profession'); 
const profileName = document.querySelector('.profile__initial-name'); 
const profileJob = document.querySelector('.profile__initial-profession'); 
const addCardCloseButton = document.querySelector('.popup__close_card'); 
const addZoomCloseButton = document.querySelector('.popup__close_zoom');
const saveAddCardForm = document.querySelector('.popup__profile_card'); 
const inputCardName = document.querySelector('.popup__item_el_place'); 
const inputCardLink = document.querySelector('.popup__item_el_link');
const cards = document.querySelector('.elements');
const popupCardZoom = document.querySelector('.popup-zoom-card');
const popupZoomTitle = document.querySelector('.popup-zoom-card__title');
const popupZoomImage = document.querySelector('.popup-zoom-card__image');
const template = document.querySelector('.elements-template').content;
const escCode = "Escape";


initialCards.forEach(({name, link}) => {
    const card = new Card ({name, link}, template);
    const element = card.getElement();
    cards.append(element);
})


const loadUserData = () =>{
    nameInput.value = profileName.textContent.trim();
    jobInput.value = profileJob.textContent.trim();
}

const saveUserData = () =>{
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
} 


const popupOpen = (popup) => { 
    popup.classList.add('popup_is-opened')
    document.addEventListener("keydown", (event) => {
        if (event.key===escCode) {
            popupClose(popup);
        }
    }, true);
} 

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

const openZoomCardPopup = (name, link) => {
    popupZoomTitle.textContent = name;
    popupZoomImage.alt = name;
    popupZoomImage.src = link;
    popupOpen(popupCardZoom);
}

const closeUserEditPopup = (event) => {
    popupClose(editUserPopup, event);
}

const openAddCardPopup = () => {
    popupOpen(addCardPopup);
}

const closeAddCardPopup = (event) => {
popupClose(addCardPopup, event);
}

const closeAddZoomPopup = (event) => {
    popupClose(popupCardZoom, event);
}

// //Zoom
// image.addEventListener('click', () => {
//     openZoomCardPopup(name, link)
// })
//     return card;
// }


// const submitAddCardForm = (event) => {
//     addCardToList(inputCardName.value, inputCardLink.value);
//     popupClose(addCardPopup, event);
//     event.preventDefault()
// }

// function render() {
//     initialCards.forEach(card => addCardToList(card.name, card.link));
// }
// render();

editUserOpenButton.addEventListener('click', openUserEditPopup)  
editUserCloseButton.addEventListener('click', closeUserEditPopup) 
editUserPopup.addEventListener('click', popupCloseByClickOnOverlayUser) 
saveEditUserForm.addEventListener('submit', submitUserEditForm) 
editCardOpenButton.addEventListener('click', openAddCardPopup)  
addCardCloseButton.addEventListener('click', closeAddCardPopup) 
// saveAddCardForm.addEventListener('submit', submitAddCardForm)
addZoomCloseButton.addEventListener('click', closeAddZoomPopup)
addCardPopup.addEventListener('click', popupCloseByClickOnOverlayCard) 
popupCardZoom.addEventListener('click', popupCloseByClickOnOverlayZoom) 


export {popupOpen, openZoomCardPopup};