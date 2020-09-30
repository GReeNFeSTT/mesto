const SaveEditUserForm = document.querySelector('.popup__profile') 
const EditUserPopup = document.querySelector('.popup_user') 
const AddCardPopup = document.querySelector('.popup_card') 
const EditUserOpenButton = document.querySelector('.profile__initial-edit') 
const EditCardOpenButton = document.querySelector('.profile__button')
const EditUserCloseButton = document.querySelector('.popup__close_user') 
const nameInput = document.querySelector('.popup__item_el_name') 
const jobInput = document.querySelector('.popup__item_el_profession') 
const profileName = document.querySelector('.profile__initial-name') 
const profileJob = document.querySelector('.profile__initial-profession') 
const AddCardCloseButton = document.querySelector('.popup__close_card') 
const AddZoomCloseButton = document.querySelector('.popup__close_zoom')
const SaveAddCardForm = document.querySelector('.popup__profile_card') 
const InputCardName = document.querySelector('.popup__item_el_place') 
const InputCardLink = document.querySelector('.popup__item_el_link')
const cards = document.querySelector('.elements')
const PopupCardZoom = document.querySelector('.popup-zoom-card')


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
} 
 
const popupClose = (popup, event) => { 
    popup.classList.remove('popup_is-opened');
} 
 
const popupCloseByClickOnOverlayUser = (event) => { 
    if (event.target!=event.currentTarget) { 
        return 
    } 
    popupClose(EditUserPopup, event); 
} 

const popupCloseByClickOnOverlayCard = (event) => { 
    if (event.target!=event.currentTarget) { 
        return 
    } 
    popupClose(AddCardPopup, event); 
} 

const popupCloseByClickOnOverlayZoom = (event) => { 
    if (event.target!=event.currentTarget) { 
        return 
    } 
    popupClose(PopupCardZoom, event); 
} 
 
 
const SubmitUserEditForm = (event) => { 
    event.preventDefault(); 
    saveUserData();
    popupClose(EditUserPopup);
} 

const OpenUserEditPopup = () => {
    loadUserData();
    popupOpen(EditUserPopup);
}

const OpenZoomCardPopup = (name, link) => {
    const popupZoomTitle = document.querySelector('.popup-zoom-card__title');
    const popupZoomImage = document.querySelector('.popup-zoom-card__image');
    popupZoomTitle.textContent = name;
    popupZoomImage.alt = name;
    popupZoomImage.src = link;
    popupOpen(PopupCardZoom);
}

const CloseUserEditPopup = (event) => {
    popupClose(EditUserPopup, event);
}

const OpenAddCardPopup = () => {
    popupOpen(AddCardPopup);
}

const CloseAddCardPopup = (event) => {
popupClose(AddCardPopup, event);
}

const CloseAddZoomPopup = (event) => {
    popupClose(PopupCardZoom, event);
}

const CreateCard = (name,link) => {
    const card = template.cloneNode(true);
    card.querySelector('.element__title').innerText = name;
    card.querySelector('.element__image').alt = name;
    card.querySelector('.element__image').src = link;

//Delete
    const deleteButton = card.querySelector('.elements__delete-button');
    deleteButton.addEventListener('click', function() {
        const cardDelete = deleteButton.closest('.element');
        cardDelete.remove();
    })
//Like
    const likeButton = card.querySelector('.elements__like');
    likeButton.addEventListener('click', function(evt) {
        evt.target.classList.toggle('elements__like_on');
        })
        

//Zoom
    const image = card.querySelector('.element__image');
    image.onclick = () => {
        OpenZoomCardPopup(name, link)
    }

    return card;
}

const AddCardToList = (name, link) => {
    const cardAdd = CreateCard(name, link);
    cards.prepend(cardAdd);
}

const SubmitAddCardForm = (event) => {
    AddCardToList(InputCardName.value, InputCardLink.value);
    // AddCardToList(InputCardLink.value);
    popupClose(AddCardPopup, event);
}



 
EditUserOpenButton.addEventListener('click', OpenUserEditPopup)  
EditUserCloseButton.addEventListener('click', CloseUserEditPopup) 
EditUserPopup.addEventListener('click', popupCloseByClickOnOverlayUser) 
SaveEditUserForm.addEventListener('submit', SubmitUserEditForm) 

EditCardOpenButton.addEventListener('click', OpenAddCardPopup)  
AddCardCloseButton.addEventListener('click', CloseAddCardPopup) 
SaveAddCardForm.addEventListener('submit', SubmitAddCardForm)
AddZoomCloseButton.addEventListener('click', CloseAddZoomPopup)
AddCardPopup.addEventListener('click', popupCloseByClickOnOverlayCard) 
PopupCardZoom.addEventListener('click', popupCloseByClickOnOverlayZoom) 






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

const cardsItem = document.querySelector('.element');



function render() {
    initialCards.forEach(renderItem);
}
function setClickCard() {

}

function renderItem({name, link}) {
    const card = template.cloneNode(true);
    card.querySelector('.element__title').innerText = name;
    card.querySelector('.element__image').alt = name;
    card.querySelector('.element__image').src = link;

//Delete
    const deleteButton = card.querySelector('.elements__delete-button');
    deleteButton.addEventListener('click', function() {
        const cardDelete = deleteButton.closest('.element');
        cardDelete.remove();
    })
//Like
    const likeButton = card.querySelector('.elements__like');
    likeButton.addEventListener('click', function(evt) {
        evt.target.classList.toggle('elements__like_on');
        })
        

//Zoom
    const image = card.querySelector('.element__image');
    image.onclick = () => {
        OpenZoomCardPopup(name, link)
    }
   



cards.appendChild(card);
}
 render();
