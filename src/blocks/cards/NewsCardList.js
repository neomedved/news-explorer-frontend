import BaseComponent from '../../js/components/BaseComponent';
import { CARDS_PER_LINE } from '../../js/constants/magic-values';

export default class NewsCardList extends BaseComponent {
  constructor(selector, cardContent, createCard, handlers) {
    super(selector, handlers);
    this._cardContent = cardContent;
    this._cards = [];
    this._cardsElement = this._element.querySelector('.cards');
    this._createCard = createCard;
  }

  initResults(cards) {
    this._clearResults();
    this._restCards = cards;
    this.showMore();
    this._element.className = 'results results_found';
  }

  renderSavedArticles(cards) {
    this._element.classList.remove('articles_none');
    this._renderResults(cards);
  }

  showMore() {
    this._renderResults(this._restCards.slice(0, Math.min(CARDS_PER_LINE, this._restCards.length)));
    const button = this._element.querySelector('.button_results');
    if (this._restCards.length > CARDS_PER_LINE) {
      this._restCards = this._restCards.slice(CARDS_PER_LINE);
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
  }

  renderLoader() {
    this._element.className = 'results results_loading';
    this._clearResults();
  }

  renderError(title, message) {
    this._element.querySelector('.results__not-found .caption_search').textContent = title;
    this._element.querySelector('.results__not-found .content_results').textContent = message;
    this._element.className = 'results results_not-found';
    this._clearResults();
  }

  _addCard(data) {
    const newCard = this._createCard(data, this._cardContent);
    this._cards.push(newCard);
    this._cardsElement.appendChild(newCard.getElement());
  }

  findCard(element) {
    return this._cards.find((item) => element.isSameNode(item.getElement()));
  }

  removeCard(card) {
    const index = this._cards.indexOf(card);
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
