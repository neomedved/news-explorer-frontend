import './pages/index.css';
import Header from './blocks/header/Header';
import Popup from './blocks/popup/Popup';
import MainApi from './js/api/MainApi';
import { MAIN_API_URL, NEWS_API_URL, NEWS_API_KEY } from './js/constants/config';
import Form from './blocks/popup/__form/Form';
import updateHeader from './js/utils/update-header';
import NewsApi from './js/api/NewsApi';
import NewsCardList from './blocks/cards/NewsCardList';
import createCard from './js/utils/create-card';
import {
  POPUP_LOGIN, POPUP_SIGNUP, POPUP_SUCCESS, CARD_SEARCH,
} from './js/constants/templates';

const mainApi = new MainApi({
  baseUrl: MAIN_API_URL,
  headers: {
    credentials: 'include',
    'Content-Type': 'application/json',
  },
});

const newsApi = new NewsApi({
  baseUrl: NEWS_API_URL,
  key: NEWS_API_KEY,
  headers: {
    'Content-Type': 'application/json',
  },
});

let popupForm;
let popup;
let header;

const newsCardList = new NewsCardList('.results', CARD_SEARCH, createCard, [
  {
    event: 'click',
    callback: (event) => {
      if (event.target.classList.contains('button_results')) {
        newsCardList.showMore();
      }
    },
  },
  {
    event: 'click',
    callback: (event) => {
      if (event.target.classList.contains('cards__button')) {
        event.preventDefault();
        if (localStorage.getItem('jwt')) {
          const card = newsCardList.findCard(event.target.parentNode.parentNode);
          if (event.target.classList.contains('cards__button_save')) {
            mainApi.createArticle(card.getData())
              .then((data) => {
                card.addId(data.articleId);
                card.renderIcon('saved');
              })
              .catch(() => {
                card.renderError();
              });
          } else if (event.target.classList.contains('cards__button_saved')) {
            mainApi.removeArticle(card.getData().articleId)
              .then(() => {
                card.removeId();
                card.renderIcon('save');
              })
              .catch(() => {
                card.renderError();
              });
          }
        }
      }
    },
  },
]);

const popupFormHandlers = [
  {
    event: 'submit',
    callback: (event) => {
      event.preventDefault();
      if (popupForm.isValid()) {
        popupForm.disable();
        if (event.target.name === 'login') {
          const { email, password } = popupForm.getInfo();
          mainApi.login(email, password)
            .then((data) => {
              localStorage.setItem('jwt', data.jwt);
              updateHeader(header, mainApi);
              newsCardList.authorization();
              popup.close();
            })
            .catch(() => {
              popupForm.setServerError();
            })
            .finally(() => {
              popupForm.enable();
            });
        } else if (event.target.name === 'signup') {
          const { nickname: name, email, password } = popupForm.getInfo();
          mainApi.signup(name, email, password)
            .then(() => {
              popup.setContent(POPUP_SUCCESS);
            })
            .catch(() => {
              popupForm.setServerError();
              popupForm.enable();
            });
        }
      }
    },
  },
  {
    event: 'input',
    callback: (event) => {
      if (Form.elementIsValid(event.target)) {
        event.target.nextElementSibling.classList.remove('popup__error_active');
      } else {
        event.target.nextElementSibling.classList.add('popup__error_active');
      }
    },
  },
];

popup = new Popup('.popup', [
  {
    event: 'mousedown',
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
        popup.setContent(POPUP_LOGIN);
        popupForm = new Form('.popup__form', popupFormHandlers);
      } else if (event.target.classList.contains('popup__link_signup')) {
        popup.setContent(POPUP_SIGNUP);
        popupForm = new Form('.popup__form', popupFormHandlers);
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
          popup.setContent(POPUP_LOGIN);
          popupForm = new Form('.popup__form', popupFormHandlers);
          popup.open();
        } else {
          localStorage.removeItem('jwt');
          updateHeader(header, mainApi);
          newsCardList.authorization();
        }
      }
    },
  },
  {
    event: 'click',
    callback: (event) => {
      if (event.target.classList.contains('header__menu')) {
        event.target.classList.toggle('header__menu_white-dropdown');
        event.target.firstChild.classList.toggle('header__background_dropdown');
        event.target.parentNode.classList.toggle('header_dropdown');
      }
    },
  },
]);

const searchForm = new Form('.search__form', [
  {
    event: 'submit',
    callback: (event) => {
      event.preventDefault();
      if (searchForm.isValid()) {
        searchForm.disable();
        newsCardList.renderLoader();
        const keyword = searchForm.getInfo().request.trim();
        newsApi.getNews(keyword)
          .then((data) => {
            const cards = data.articles.map((item) => (
              {
                keyword: keyword[0].toUpperCase() + keyword.slice(1).toLowerCase(),
                title: item.title,
                text: item.description,
                date: item.publishedAt,
                source: item.source.name,
                link: item.url,
                image: item.urlToImage,
              }
            ));
            if (cards.length) {
              newsCardList.initResults(cards);
            } else {
              newsCardList.renderError('Ничего не найдено', 'К сожалению по вашему запросу ничего не найдено.');
            }
          })
          .catch(() => {
            newsCardList.renderError('Во время запроса произошла ошибка', 'Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
          })
          .finally(() => {
            searchForm.enable();
          });
      } else {
        newsCardList.renderError('Запрос не должен быть пустым', 'Пожалуйста, введите корректный запрос.');
      }
    },
  },
]);

updateHeader(header, mainApi);
newsCardList.authorization();
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    popup.close();
  }
});
