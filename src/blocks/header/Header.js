import BaseComponent from '../../js/components/BaseComponent';

export default class Header extends BaseComponent {
  render(props) {
    const user = this._element.querySelector('.header__user');
    const icon = this._element.querySelector('.header__icon');
    const link = this._element.querySelectorAll('.header__link')[1];
    if (!props.isLoggedIn) {
      user.textContent = 'Авторизация';
      icon.classList.add('header__icon_unauthorized');
      link.classList.add('header__link_unauthorized');
    } else {
      user.textContent = props.userName;
      icon.classList.remove('header__icon_unauthorized');
      link.classList.remove('header__link_unauthorized');
    }
  }
}
