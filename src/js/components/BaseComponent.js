export default class BaseComponent {
  constructor(selector, handlers) {
    this.element = document.querySelector(selector);
    this._setHandlers(handlers);
  }

  _setHandlers(handlers) {
    handlers.forEach((el) => {
      this.element.addEventListener(el.event, el.callback);
    });
  }
}
