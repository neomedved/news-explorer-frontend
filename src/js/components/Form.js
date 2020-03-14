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

  setServerError() {
    this._element.querySelector('.popup__error_server').classList.add('popup__error_active');
  }
}
