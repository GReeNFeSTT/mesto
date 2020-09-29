const formUserEditSubmit = document.querySelector('.popup__profile')
const popupUser = document.querySelector('.popup_user')
const buttonAddCard = document.querySelector('.popup_card')
const buttonOpenEditUser = document.querySelector('.profile__initial-edit')
const popupCloseEditUser = document.querySelector('.popup__close')
const nameInput = document.querySelector('.popup__item_el_name')
const jobInput = document.querySelector('.popup__item_el_profession')
const profileName = document.querySelector('.profile__initial-name')
const profileJob = document.querySelector('.profile__initial-profession')
const popupCardOpenButton = document.querySelector('.profile__button')
const formAddCardSubmit = document.querySelector('.popup__card')
const inputCardPlace = document.querySelector('.popup__item_el_place');
const inputCardLink = document.querySelector('.popup__item_el_link');
const taskTemplate = document.querySelector('.elements-template'); 

const loadUserData = () =>{
    nameInput.value = profileName.textContent.trim();
    jobInput.value = profileJob.textContent.trim();
}

const saveUserData = () =>{
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}

const popupOpen = (popup) => {
    popup.classList.add('popup_is-opened');
}


const popupClose = (popup, event) => {
    event.preventDefault();
    popup.classList.remove('popup_is-opened');
}

const popupCloseByClickOnOverlay = (event) => {
    if (event.target!=event.currentTarget) {
        return
    }
    popupClose();
}


const submitUserEditForm = (event) => {
    popupClose(popupUser, event);
    saveUserData();
}

const createTask = (name) => {
    const card = taskTemplate.content.cloneNode(true);
    card.querySelector('.element__image').src = link;
    card.querySelector('.element__title').textContent = name;
    return card;
}

function render() {
    initialCards.forEach(renderItem);
}

const openUserEditPopup = () => {
    loadUserData();
    popupOpen(popupUser);
}

const closeUserPopup = (event) =>{
    popupClose(popupUser, event)
}

const openAddTaskPopup = () => {
    popupOpen(buttonAddCard);
}

const addTaskToList = (name) => {
    const task = createTask(name);
    taskContainer.prepend(task);
}

const submitAddCardForm = (event) => {
    addCardPlaceToList(inputCardPlace.value);
    addCardLinkToList(inputCardLink.value);
    closePopup(buttonAddCard, event)
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
buttonOpenEditUser.addEventListener('click', openUserEditPopup) 
popupCloseEditUser.addEventListener('click', closeUserPopup)
popupUser.addEventListener('click', popupCloseByClickOnOverlay)
formUserEditSubmit.addEventListener('submit', submitUserEditForm);

buttonAddCard.addEventListener('click', openAddTaskPopup);
popupUser.addEventListener('click', popupCloseByClickOnOverlay)
formAddCardSubmit.addEventListener('submit', submitAddCardForm);

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
const cardsItem = document.querySelector('element');
const placeInput = popupCard.querySelector('.popup-card__item_el_place');
const urlInput = popupCard.querySelector('.popup-card__item_el_link');

function newFunction() {
    buttonAddCard.addEventListener('click', openAddTaskPopup)
}

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
        cards.appendChild(card);
    }

    function AddCard(){
        const nameValue = addFormPlaceInput.value;
        const linkValue = addFormLinkInput.value;
        if (state.mode === "add") {
            items.unshift(text);
        } else if (state.mode === "edit") {
            items[state.index] = text;
        }
    
        render();
    }

 render();





// const template = document.querySelector('.elements-template').content;
// const cards = document.querySelector('.elements');


// function render() {
//     initialCards.forEach(renderItem);
// }

// function renderItem({name, link}) {
//     const card = template.cloneNode(true);
//     card.querySelector('.elements__title').innerText = name;
//     card.querySelector('.elements__image').alt = name;
//     card.querySelector('.elements__image').src = link;
//     // Увеличение фото
//     const image = card.querySelector('.elements__image');
//     const popupZoomTitle = document.querySelector('.popup__title-zoom');
//     const popupZoomImage = document.querySelector('.popup__image');
//     image.addEventListener('click', () => {
//         popupZoom.classList.add('popup__zoom_opened');
//         popupZoomTitle.textContent = name;
//         popupZoomImage.alt = name;
//         popupZoomImage.src = link;
//     })
//     // Кнопка Delete
//     const deleteButton = card.querySelector('.elements__delete-button');
//     deleteButton.addEventListener('click', function() {
//         const cardDelete = deleteButton.closest('.elements__card');
//         cardDelete.remove();
//     })
//     // Кнопка Like
//     const likeButton = card.querySelector('.elements__like');
//     likeButton.addEventListener('click', function(evt) {
//         evt.target.classList.toggle('elements__like_active');
//         })
//     cards.appendChild(card);
// }

// // Добавление карточки
// formAddElement.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     const nameValue = addFormPlaceInput.value;
//     const linkValue = addFormLinkInput.value;
//     const newCard = {
//         name: nameValue,
//         link: linkValue
//     }
//     cards.prepend(newCard);
//     renderItem(newCard);
//     addFormPlaceInput.value = "";
//     addFormLinkInput.value = "";
//     popupAddClose();
// });

// render();