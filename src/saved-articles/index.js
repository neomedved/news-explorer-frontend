import '../pages/saved-articles/index.css';
import Header from '../js/components/Header';
import Popup from '../js/components/Popup';
import MainApi from '../js/api/MainApi';
import { MAIN_API_URL } from '../js/constants/config';
import Form from '../js/components/Form';
import updateHeader from '../js/utils/update-header';


const mainApi = new MainApi({
  baseUrl: MAIN_API_URL,
  headers: {
    credentials: 'include',
    'Content-Type': 'application/json',
  },
});

let form;
let popup;
let header;

const formHandlers = [
  {
    event: 'submit',
    callback: (event) => {
      event.preventDefault();
      if (event.target.checkValidity()) {
        if (event.target.name === 'login') {
          const { email, password } = form.getInfo();
          mainApi.login(email, password)
            .then((data) => {
              localStorage.setItem('jwt', data.jwt);
              updateHeader(header, mainApi);
              popup.close();
            })
            .catch(() => {
              document.querySelector('.popup__error_server').classList.add('popup__error_active');
            });
        } else if (event.target.name === 'signup') {
          const { name, email, password } = form.getInfo();
          mainApi.signup(name, email, password)
            .then(() => {
              popup.setContent('success');
            })
            .catch(() => {
              document.querySelector('.popup__error_server').classList.add('popup__error_active');
            });
        }
      }
    },
  },
  {
    event: 'input',
    callback: (event) => {
      if (event.target.checkValidity()) {
        event.target.nextElementSibling.classList.remove('popup__error_active');
      } else {
        event.target.nextElementSibling.classList.add('popup__error_active');
      }
    },
  },
];

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

header = new Header('.header', [
  {
    event: 'click',
    callback: (event) => {
      if (event.target.classList.contains('header__login') || event.target.parentNode.classList.contains('header__login')) {
        if (!localStorage.getItem('jwt')) {
          popup.setContent('login');
          form = new Form('.popup__form', formHandlers);
          popup.open();
        } else {
          localStorage.removeItem('jwt');
          updateHeader(header, mainApi);
        }
      }
    },
  },
  {
    event: 'click',
    callback: (event) => {
      if (event.target.classList.contains('header__menu')) {
        event.target.classList.toggle('header__menu_dropdown');
        event.target.firstChild.classList.toggle('header__background_dropdown');
      }
    },
  },
]);

updateHeader(header, mainApi);
