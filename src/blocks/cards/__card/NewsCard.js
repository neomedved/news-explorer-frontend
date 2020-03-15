import createElementFromString from '../../../js/utils/create-element-from-string';

export default class NewsCard {
  constructor(data, content) {
    this._data = data;
    this._element = createElementFromString(content);
    this._element.href = this._data.link;

    const img = this._element.querySelector('.cards__image');

    img.src = this._data.image;
    img.alt = this._data.title;
    this._element.querySelector('.caption').textContent = this._data.title;
    this._element.querySelector('.cards__text').textContent = this._data.text;
    this._element.querySelector('.cards__source').textContent = this._data.source;

    const date = new Date(this._data.date);

    this._element.querySelector('.subtitle').textContent = `${date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}, ${date.getFullYear()}`;

    this._element.querySelector('.cards__keyword').textContent = this._data.keyword;
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

  renderError() {
    this._element.querySelector('.cards__background').classList.add('cards__background_error');
  }

  renderIcon(modifier) {
    const icon = this._element.querySelector('.cards__button');
    icon.parentNode.classList.remove('cards__background_error');
    icon.className = `cards__button cards__button_${modifier}`;
  }
}
