export default class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  template(url, method, body) {
    return fetch(`${this.baseUrl}/${url}`, {
      method,
      headers: this.headers,
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
    return this.template('login', 'POST', {
      email, password,
    });
  }

  signup(name, email, password) {
    return this.template('signup', 'POST', {
      name, email, password,
    });
  }

  getUser() {
    return this.template('me', 'GET');
  }
}
