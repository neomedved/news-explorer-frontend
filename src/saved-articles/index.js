import '../pages/saved-articles/index.css';
import Header from '../js/components/Header';
import MainApi from '../js/api/MainApi';
import { MAIN_API_URL } from '../js/constants/config';
import updateHeader from '../js/utils/update-header';


const mainApi = new MainApi({
  baseUrl: MAIN_API_URL,
  headers: {
    credentials: 'include',
    'Content-Type': 'application/json',
  },
});

const header = new Header('.header', [
  {
    event: 'click',
    callback: (event) => {
      if (event.target.classList.contains('header__login') || event.target.parentNode.classList.contains('header__login')) {
        localStorage.removeItem('jwt');
        window.location.href = '../';
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


if (localStorage.getItem('jwt')) {
  updateHeader(header, mainApi);
} else {
  window.location.href = '../';
}
