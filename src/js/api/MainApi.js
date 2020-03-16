export default class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _template(url, method, body) {
    const headers = this._headers;
    headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
    return fetch(`${this._baseUrl}/${url}`, {
      method,
      headers,
      body: method === 'GET' ? undefined : JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`{ status: ${res.status}, response: ${res.json()} }`));
      });
  }

  login(email, password) {
    return this._template('signin', 'POST', {
      email, password,
    });
  }

  signup(name, email, password) {
    return this._template('signup', 'POST', {
      name, email, password,
    });
  }

  getUserData() {
    return this._template('users/me', 'GET');
  }

  getArticles() {
    return this._template('articles', 'GET');
  }

  createArticle(article) {
    return this._template('articles', 'POST', article);
  }

  removeArticle(id) {
    return this._template(`articles/${id}`, 'DELETE');
  }
}
