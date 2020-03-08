import BaseComponent from './BaseComponent';
import { POPUP_LOGIN, POPUP_SIGNUP, POPUP_SUCCESS } from '../constants/templates';
import createElementFromString from '../utils/create-element-from-string';

export default class Popup extends BaseComponent {
  open() {
    this.element.classList.add('popup_active');
  }

  close() {
    this.element.classList.remove('popup_active');
    this.clearContent();
  }

  setContent(type) {
    this.clearContent();
    switch (type) {
      case 'login':
        this.element.appendChild(createElementFromString(POPUP_LOGIN));
        break;
      case 'signup':
        this.element.appendChild(createElementFromString(POPUP_SIGNUP));
        break;
      case 'success':
        this.element.appendChild(createElementFromString(POPUP_SUCCESS));
        break;
      default:
    }
  }

  clearContent() {
    this.element.textContent = '';
  }
}
