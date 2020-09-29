const popupForm = document.querySelector('.popup__profile') 
const popup = document.querySelector('.popup') 
const popupOpenButton = document.querySelector('.profile__initial-edit') 
const popupCloseButton = document.querySelector('.popup__close') 
const nameInput = document.querySelector('.popup__item_el_name') 
const jobInput = document.querySelector('.popup__item_el_profession') 
const profileName = document.querySelector('.profile__initial-name') 
const profileJob = document.querySelector('.profile__initial-profession') 
 
const loadUserData = () =>{
    nameInput.value = profileName.textContent.trim();
    jobInput.value = profileJob.textContent.trim();
}

const saveUserData = () =>{
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
} 


const popupOpen = (event) => { 
    popup.classList.add('popup_is-opened') 
    loadUserData();
} 
 
const popupClose = () => { 
    popup.classList.remove('popup_is-opened'); 
} 
 
const popupCloseByClickOnOverlay = (event) => { 
    if (event.target!=event.currentTarget) { 
        return 
    } 
    popupClose(); 
} 
 
 
const formSubmitHandler = (event) => { 
    event.preventDefault(); 
    saveUserData();
    popupClose(); 
} 

 
popupOpenButton.addEventListener('click', popupOpen)  
popupCloseButton.addEventListener('click', popupClose) 
popup.addEventListener('click', popupCloseByClickOnOverlay) 
popupForm.addEventListener('submit', formSubmitHandler) 




//Шесть карточек «из коробки»

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
//  AddCard
const template = document.querySelector('.elements-template').content;
const cards = document.querySelector('.elements');
const cardsItem = document.querySelector('.element');



function render() {
    initialCards.forEach(renderItem);
}

function renderItem({name, link}) {
    const card = template.cloneNode(true);
    card.querySelector('.element__title').innerText = name;
    card.querySelector('.element__image').alt = name;
    card.querySelector('.element__image').src = link;

cards.appendChild(card);
}
 render();
