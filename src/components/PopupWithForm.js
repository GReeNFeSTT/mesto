import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._popupContainer =this._form.querySelector('.popup__profile');
    this.submit = submit.bind(this);
  }

open () {
  super.open();
  this.setEventListeners();
}

close () {
  super.close();
  this._popupContainer.reset();
  this._popupContainer.removeEventListener('submit', this.submit);
}

getInputValues() {
  const popupItem = this._form.querySelectorAll('.popup__item');
  const nameUser = {};
  popupItem.forEach((item, index) => {
    const key = item.getAttribute('name');
    nameUser[key] = item.value;
  });
  return nameUser;
}

setEventListeners() {
  super.setEventListeners();
  this._popupContainer.reset();
  this._popupContainer.addEventListener('submit', this.submit);
  }
}