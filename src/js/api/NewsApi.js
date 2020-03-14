export default class NewsApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._key = options.key;
    this._headers = options.headers;
  }

  getNews(keyword) {
    const to = new Date();
    const from = new Date();
    from.setDate(to.getDate() - 7);
    return fetch(`${this._baseUrl}/everything?q=${encodeURIComponent(keyword)}&apiKey=${this._key}&from=${from.getFullYear()}-${from.getMonth() + 1}-${from.getDate()}&to=${to.getFullYear()}-${to.getMonth() + 1}-${to.getDate()}&pageSize=100`, {
      method: 'GET',
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`{ status: ${res.status}, response: ${res.json()} }`));
      });
  }
}
