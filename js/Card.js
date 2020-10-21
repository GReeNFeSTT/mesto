import {popupOpen, openZoomCardPopup} from './index.js';

class Card {
    constructor({name, link}, selector) {
        this._link = link;
        this._name = name;
        this._selector = selector;
    }
    
    _getTemplate() {
        const cardElement = document
        .querySelector('.elements-template')
        .content
        .querySelector('.element')
        .cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        const placeImage = this._element.querySelector('.element__image');
        placeImage.src = this._link;
        placeImage.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
    
        this._setEventListeners();
    
        return this._element;
    }

    _deleteHandler() {
        this._element.remove();
    }

    _likeHandler() {
        this._element.querySelector('.elements__like').classList.toggle('elements__like_on');
    }

    _openPopupPhoto() {
        const cardImage = this._element.querySelector('.element__image');
        const popupImage = document.querySelector('.popup-zoom-card__image');
        const popupCaption = document.querySelector('.popup-zoom-card__title');
        popupImage.src = cardImage.src;
        popupImage.alt = cardImage.alt;
        popupCaption.textContent = cardImage.alt;
        popupOpen(openZoomCardPopup);
    }

    _setEventListeners() {
        this._element.querySelector('.elements__delete-button').addEventListener('click', () => this._deleteHandler());
        this._element.querySelector('.elements__like').addEventListener('click', () => this._likeHandler());
        this._element.querySelector('.element__image').addEventListener('click', () => this._openPopupPhoto());
        }


getElement() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__image').src = this._link;
    this._setEventListeners();
    return this._element;
}
}



export default Card;
