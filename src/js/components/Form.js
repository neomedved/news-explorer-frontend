import BaseComponent from './BaseComponent';

export default class Form extends BaseComponent {
  getInfo() {
    const info = {
      email: this.element.elements.email.value,
      password: this.element.elements.password.value,
    };
    if (this.element.name === 'signup') {
      info.name = this.element.elements.name.value;
    }
    return info;
  }
}
