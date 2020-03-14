import '../pages/saved-articles/index.css';
import Header from '../js/components/Header';
import MainApi from '../js/api/MainApi';
import { MAIN_API_URL } from '../js/constants/config';
import updateHeader from '../js/utils/update-header';
import NewsCardList from '../js/components/NewsCardList';
import renderSavedArticles from '../js/utils/render-saved-articles';


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

const newsCardList = new NewsCardList('.articles', 'saved', [
  {
    event: 'click',
    callback: (event) => {
      if (event.target.classList.contains('cards__button')) {
        event.preventDefault();
        const card = newsCardList.findCard(event.target.parentNode.parentNode);
        mainApi.removeArticle(card.getData()._id)
          .then(() => {
            newsCardList.removeCard(card);
            if (!document.querySelector('.cards').childNodes.length) {
              document.querySelector('.articles').classList.add('articles_none');
            }
          })
          .catch(() => {
            card.renderIcon('error');
          });
      }
    },
  },
]);

if (localStorage.getItem('jwt')) {
  updateHeader(header, mainApi);
} else {
  window.location.href = '../';
}

renderSavedArticles(mainApi, newsCardList);
