import BaseComponent from './BaseComponent';
import NewsCard from './NewsCard';

export default class NewsCardList extends BaseComponent {
  constructor(selector, type, handlers) {
    super(selector, handlers);
    this._type = type;
    this._cards = [];
    this._cardsElement = this._element.querySelector('.cards');
    this._className = selector.slice(1);
  }

  initResults(cards) {
    this._clearResults();
    if (this._type === 'saved') {
      this._renderResults(cards);
    } else if (this._type === 'search') {
      this._restCards = cards;
      this.showMore();
    }
  }

  showMore() {
    this._renderResults(this._restCards.slice(0, Math.min(3, this._restCards.length)));
    const button = this._element.querySelector('.button_results');
    if (this._restCards.length > 3) {
      this._restCards = this._restCards.slice(3);
      button.classList.remove('button_results-no-more');
    } else {
      button.classList.add('button_results-no-more');
    }
  }

  _clearResults() {
    this._cardsElement.textContent = '';
    this._cards = [];
    this._restCards = [];
  }

  _renderResults(results) {
    results.forEach((element) => {
      this._addCard(element);
    });
    this._element.className = `${this._className} results_found`;
  }

  renderLoader() {
    this._element.className = `${this._className} results_loading`;
    this._clearResults();
  }

  renderError(title, message) {
    this._element.querySelector('.results__not-found .caption_search').textContent = title;
    this._element.querySelector('.results__not-found .content_results').textContent = message;
    this._element.className = `${this._className} results_not-found`;
    this._clearResults();
  }

  _addCard(data) {
    const newCard = new NewsCard(data, this._type);
    this._cards.push(newCard);
    this._cardsElement.appendChild(newCard.getElement());
  }

  findCard(element) {
    return this._cards.find((item) => element.isSameNode(item.getElement()));
  }

  removeCard(index) {
    this._cardsElement.removeChild(this._cards[index].getElement());
    this._cards.splice(index, 1);
  }

  authorization() {
    if (localStorage.getItem('jwt')) {
      this._cardsElement.classList.add('cards_authorized');
    } else {
      this._cardsElement.classList.remove('cards_authorized');
    }
  }
}
