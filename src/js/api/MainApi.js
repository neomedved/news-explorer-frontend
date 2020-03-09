export default class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  template(url, method, body) {
    const { headers } = this;
    headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
    return fetch(`${this.baseUrl}/${url}`, {
      method,
      headers,
      body: method === 'GET' ? undefined : JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      });
  }

  login(email, password) {
    return this.template('signin', 'POST', {
      email, password,
    });
  }

  signup(name, email, password) {
    return this.template('signup', 'POST', {
      name, email, password,
    });
  }

  getUserData() {
    return this.template('users/me', 'GET');
  }

  getArticles() {
    return this.template('articles', 'GET');
  }

  createArticle(article) {
    return this.template('articles', 'POST', article);
  }

  removeArticle(id) {
    return this.template(`articles/${id}`, 'DELETE');
  }
}
