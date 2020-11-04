import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popapCardZoomImage = this._form.querySelector('.popup-zoom-card__image');
    this._popapCardZoomTitle = this._form.querySelector('.popup-zoom-card__title');
  }

  open (name, link) {
    this._popapCardZoomImage.setAttribute('src', link);
    this._popapCardZoomTitle.setAttribute('alt', name);
    this._popapCardZoomTitle.textContent = name;
    super.open();
    super.setEventListeners();
  };
}

