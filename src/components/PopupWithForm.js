import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._popupContainer =this._form.querySelector('.popup__profile');
    this._submit = submit.bind(this);
  }

open () {
  super.open();
  this.setEventListeners();
}

close () {
  this._popupContainer.reset();
  super.close();
  this._popupContainer.removeEventListener('submit', this._submit);
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
  this._popupContainer.reset();
  super.setEventListeners();
  this._popupContainer.addEventListener('submit', this._submit);
  }
}