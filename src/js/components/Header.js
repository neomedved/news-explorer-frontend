import BaseComponent from './BaseComponent';

export default class Header extends BaseComponent {
  render(props) {
    const button = this._element.querySelector('.header__login');
    if (!props.isLoggedIn) {
      button.textContent = 'Авторизация';
    }
  }
}
