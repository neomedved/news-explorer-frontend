import BaseComponent from './BaseComponent';

export default class Form extends BaseComponent {
  getInfo() {
    const info = {
      email: this._element.elements.email.value,
      password: this._element.elements.password.value,
    };
    if (this._element.name === 'signup') {
      info.name = this._element.elements.nickname.value;
    }
    return info;
  }
}
