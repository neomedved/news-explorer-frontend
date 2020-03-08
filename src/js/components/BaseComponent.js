export default class BaseComponent {
  constructor(selector, handlers) {
    this._element = document.querySelector(selector);
    this._setHandlers(handlers);
  }

  _setHandlers(handlers) {
    handlers.forEach((el) => {
      this._element.addEventListener(el.event, el.callback);
    });
  }
}
