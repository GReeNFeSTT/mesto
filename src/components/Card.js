
export class Card {
    constructor(data, cardSelector, openZoomPopup) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._openZoomPopup = openZoomPopup;
    }

    _getTemplate() {
        const template = this._cardSelector.cloneNode(true);
        const card = template.querySelector('.element');
        return card;
    }

    _likeButton() {
        this._cardStructure.like.addEventListener('click', () => {
            this._cardStructure.like.classList.toggle('elements__like_on');
        });
    }

    _deleteButton() {
        this._cardStructure.trash.addEventListener('click', () => {
            this._card.remove();
            this._card = null;
        });
    }
    
    _popupZoom() {
        this._cardStructure.img.addEventListener('click', () => {
            this._openZoomPopup(this._name, this._link);
        });
    }

    _setEventListeners() {
        this._likeButton();
        this._deleteButton();
        this._popupZoom();
    }

    generateCard() {
        this._card = this._getTemplate();
        this._cardStructure = {
            'img': this._card.querySelector('.element__image'),
            'like': this._card.querySelector('.elements__like'),
            'trash': this._card.querySelector('.elements__delete-button'),
            'title': this._card.querySelector('.element__title')
        }
        this._cardStructure.img.setAttribute('src',`${this._name}`);
        this._cardStructure.img.setAttribute('src',`${this._link}`);
        this._cardStructure.title.textContent = this._name;
        this._setEventListeners();
        return this._card;
    }
}


