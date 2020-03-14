import BaseComponent from './BaseComponent';

export default class Form extends BaseComponent {
  getInfo() {
    return [...this._element.elements].reduce((prev, item) => {
      const next = prev;
      if (item.nodeName === 'INPUT') {
        next[item.name] = item.value;
      }
      return next;
    }, {});
  }

  disable() {
    this._element.elements.forEach((item) => {
      item.setAttribute('disabled', '');
    });
  }

  enable() {
    this._element.elements.forEach((item) => {
      item.removeAttribute('disabled');
    });
  }

  setServerError() {
    this._element.querySelector('.popup__error_server').classList.add('popup__error_active');
  }
}
