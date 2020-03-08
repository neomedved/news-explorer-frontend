import BaseComponent from './BaseComponent';
import { POPUP_LOGIN, POPUP_SIGNUP, POPUP_SUCCESS } from '../constants/templates';
import createElementFromString from '../utils/create-element-from-string';

export default class Popup extends BaseComponent {
  open() {
    this._element.classList.add('popup_active');
  }

  close() {
    this._element.classList.remove('popup_active');
    this.clearContent();
  }

  setContent(type) {
    this.clearContent();
    switch (type) {
      case 'login':
        this._element.appendChild(createElementFromString(POPUP_LOGIN));
        break;
      case 'signup':
        this._element.appendChild(createElementFromString(POPUP_SIGNUP));
        break;
      case 'success':
        this._element.appendChild(createElementFromString(POPUP_SUCCESS));
        break;
      default:
    }
  }

  clearContent() {
    this._element.textContent = '';
  }
}
