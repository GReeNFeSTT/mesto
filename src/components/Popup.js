export default class Popup {
    constructor(popupSelector) {
        this._form = popupSelector;
        this._closeButton = this._form.querySelector('.popup__close');
        this._close = this.close.bind(this);
    }


    open() {
        this._popupToggle();
    }

    close() {
        this._popupToggle();
        this._closeButton.removeEventListener('click', this._close)
        document.removeEventListener('keydown', this._handleEscClose);
        this._form.removeEventListener('click', this._closePopupByOverlayClick);
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', this._close);
        document.addEventListener('keydown', this._handleEscClose);
        this._form.addEventListener('click', this._closePopupByOverlayClick);
    }

    _popupToggle() {
        this._form.classList.toggle('popup_is-opened');
    };
 
     _handleEscClose = (evt) => {
         if (evt.key === "Escape") {
             this.close();
         }
     }
 
     _closePopupByOverlayClick = (evt) => {
         if (evt.target === evt.currentTarget) {
             this.close();
         }
     }
}