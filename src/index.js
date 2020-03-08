import './pages/index.css';
import Header from './js/components/Header';
import Popup from './js/components/Popup';
import MainApi from './js/api/MainApi';
import { MAIN_API_URL } from './js/constants/config';
import Form from './js/components/Form';

const token = localStorage.getItem('jwt');

const mainApi = new MainApi({
  baseUrl: MAIN_API_URL,
  headers: {
    credentials: 'include',
    'Content-Type': 'application/json',
  },
});

let form;
let popup;

const formHandlers = [{
  event: 'submit',
  callback: (event) => {
    event.preventDefault();
    if (event.target.name === 'login') {
      const { email, password } = form.getInfo();
      mainApi.login(email, password)
        .then((data) => {
          localStorage.setItem('jwt', data.jwt);
          popup.close();
        })
        .catch(() => {
          document.querySelector('.popup__error_server').classList.add('popup__error_active');
        });
    } else if (event.target.name === 'signup') {
      const { name, email, password } = form.getInfo();
      mainApi.signup(name, email, password)
        .then(() => {
          popup.close();
        })
        .catch(() => {
          document.querySelector('.popup__error_server').classList.add('popup__error_active');
        });
    }
  },
}];

popup = new Popup('.popup', [
  {
    event: 'click',
    callback: (event) => {
      if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
        popup.close();
      }
    },
  },
  {
    event: 'click',
    callback: (event) => {
      if (event.target.classList.contains('popup__link_login') || event.target.classList.contains('popup__link_success')) {
        popup.setContent('login');
        form = new Form('.popup__form', formHandlers);
      } else if (event.target.classList.contains('popup__link_signup')) {
        popup.setContent('signup');
        form = new Form('.popup__form', formHandlers);
      }
    },
  },
]);

const header = new Header('.header', [
  {
    event: 'click',
    callback: (event) => {
      if (event.target.classList.contains('header__login')) {
        popup.setContent('login');
        form = new Form('.popup__form', formHandlers);
        popup.open();
      }
    },
  },
]);

header.render({ token });
