import BaseComponent from '../../js/components/BaseComponent';
import createElementFromString from '../../js/utils/create-element-from-string';

export default class Popup extends BaseComponent {
  open() {
    this._element.classList.add('popup_active');
  }

  close() {
    this._element.classList.remove('popup_active');
    this.clearContent();
  }

  setContent(content) {
    this.clearContent();
    this._element.appendChild(createElementFromString(content));
  }

  clearContent() {
    this._element.textContent = '';
  }
}
