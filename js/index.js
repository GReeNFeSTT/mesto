const popupForm = document.querySelector('.popup__profile')
const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.profile__initial-edit')
const popupCloseButton = document.querySelector('.popup__close')
const nameInput = document.querySelector('.popup__item_el_name')
const jobInput = document.querySelector('.popup__item_el_profession')
const profileName = document.querySelector('.profile__initial-name')
const profileJob = document.querySelector('.profile__initial-profession')


const popupOpen = (event) => {
    popup.classList.add('popup_is-opened')
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
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
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupClose();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

popupOpenButton.addEventListener('click', popupOpen) 
popupCloseButton.addEventListener('click', popupClose)
popup.addEventListener('click', popupCloseByClickOnOverlay)
popupForm.addEventListener('submit', formSubmitHandler)
//open
    //profileName.textContent = nameInput.value;
    // profileJob.textContent = jobInput.value;
//close
   //nameInput.value = profileName.textContent;
   //jobInput.value = profileJob.textContent;