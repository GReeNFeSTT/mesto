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
const SaveAddCardForm = document.querySelector('.popup__profile_card') 
const InputCardName = document.querySelector('.popup__item_el_place') 
const InputCardLink = document.querySelector('.popup__item_el_link')
const cards = document.querySelector('.elements')

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
    event.preventDefault(); 
} 
 
const popupCloseByClickOnOverlay = (event) => { 
    if (event.target!=event.currentTarget) { 
        return 
    } 
    popupClose(); 
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

const CloseUserEditPopup = (event) => {
    popupClose(EditUserPopup, event);
}

const OpenAddCardPopup = () => {
    popupOpen(AddCardPopup);
}

const CloseAddCardPopup = (event) => {
popupClose(AddCardPopup, event);
}

const CreateCard = (name,link) => {
    const card = template.cloneNode(true);
    card.querySelector('.element__title').innerText = name;
    card.querySelector('.element__image').alt = name;
    card.querySelector('.element__image').src = link;
    return card;
}

const AddCardToList = (name, link) => {
    const cardAdd = CreateCard(name, link);
    cards.appendChild(cardAdd);
}

const SubmitAddCardForm = (event) => {
    AddCardToList(InputCardName.value, InputCardLink.value);
    // AddCardToList(InputCardLink.value);
    popupClose(AddCardPopup, event);
}



 
EditUserOpenButton.addEventListener('click', OpenUserEditPopup)  
EditUserCloseButton.addEventListener('click', CloseUserEditPopup) 
EditUserPopup.addEventListener('click', popupCloseByClickOnOverlay) 
SaveEditUserForm.addEventListener('submit', SubmitUserEditForm) 

EditCardOpenButton.addEventListener('click', OpenAddCardPopup)  
AddCardCloseButton.addEventListener('click', CloseAddCardPopup) 
// EditUserPopup.addEventListener('click', popupCloseByClickOnOverlay) 
SaveAddCardForm.addEventListener('submit', SubmitAddCardForm) 




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
        const image = card.querySelector('.elements__image');



    // const popupZoomTitle = document.querySelector('.popup-zoom__text');
    // const popupZoomImage = document.querySelector('.popup-zoom__image');
    // image.addEventListener('click', () => {
    // popupZoom.classList.add('popup__image-open');
    // popupZoomTitle.textContent = name;
    // popupZoomImage.alt = name;
    // popupZoomImage.src = link;



cards.appendChild(card);
}
 render();
