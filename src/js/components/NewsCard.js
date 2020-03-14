import createElementFromString from '../utils/create-element-from-string';
import { CARD } from '../constants/templates';

export default class NewsCard {
  constructor(data, type) {
    this._data = data;
    this._element = createElementFromString(CARD);
    this._element.href = this._data.link;

    const img = this._element.querySelector('.cards__image');

    img.src = this._data.image;
    img.alt = this._data.title;
    this._element.querySelector('.caption').textContent = this._data.title;
    this._element.querySelector('.cards__text').textContent = this._data.text;
    this._element.querySelector('.cards__source').textContent = this._data.source;

    const date = new Date(this._data.date);

    this._element.querySelector('.subtitle').textContent = `${date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}, ${date.getFullYear()}`;

    const hint = this._element.querySelector('.cards__hint');
    const keyword = this._element.querySelector('.cards__keyword');

    if (type === 'search') {
      hint.classList.add('.cards__hint_authorize');
      hint.textContent = 'Войдите, чтобы сохранять статьи';
      keyword.classList.add('cards__keyword_search');
    } else if (type === 'saved') {
      hint.textContent = 'Убрать из сохранённых';
      keyword.textContent = this._data.keyword;
    }

    this.renderIcon(type);
  }

  getData() {
    return this._data;
  }

  getElement() {
    return this._element;
  }

  addId(id) {
    this._data.articleId = id;
  }

  removeId() {
    delete this._data.articleId;
  }

  renderIcon(type) {
    const icon = this._element.querySelector('.cards__button');
    icon.parentNode.classList.remove('cards__background_error');
    switch (type) {
      case 'search':
        icon.className = 'cards__button cards__button_save';
        break;
      case 'saved':
        icon.className = 'cards__button cards__button_delete';
        break;
      case 'bookmarked':
        icon.className = 'cards__button cards__button_saved';
        break;
      case 'error':
        icon.parentNode.classList.add('cards__background_error');
        break;
      default:
    }
  }
}
