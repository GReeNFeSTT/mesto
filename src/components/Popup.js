export default class Popup {
    constructor(popupSelector) {
        this._form = popupSelector;
        this._closeButton = this._form.querySelector('.popup__close');
        // this._close = this.close.bind(this);
        this.__handleEscClose = this._handleEscClose.bind(this);
    }


    open() {
        this._popupToggle();
    }

    close() {
        this._popupToggle();
        this._closeButton.onclick = null
        document.removeEventListener('keydown', this.__handleEscClose);
        // this._form.removeEventListener('click', (evt) => this._closePopupByOverlayClick(evt));
    }

    setEventListeners() {
        this._closeButton.onclick = () => this.close()
        // this._closeButton.addEventListener('click', () => this.close());
        document.addEventListener('keydown', this.__handleEscClose);
        // this._form.addEventListener('click', (evt) => this._closePopupByOverlayClick(evt));
    }

    _popupToggle() {
        this._form.classList.toggle('popup_is-opened');
    };
 
    _handleEscClose(evt) {
         if (evt.key === "Escape") {
             this.close();
         }
     }
 
     _closePopupByOverlayClick(evt) {
         if (evt.target === evt.currentTarget) {
             this.close();
         }
     }
}