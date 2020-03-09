export default class NewsApi {
  constructor(url, key, headers) {
    this.url = url;
    this.key = key;
    this.headers = headers;
  }

  getNews(keyword) {
    const to = new Date();
    const from = new Date();
    from.setDate(to.getDate() - 7);
    return fetch(`${this.url}/everything?q=${keyword}?apiKey=${this.key}?from=${from.getFullYear()}-${from.getMonth()}-${from.getDay()}?to=${to.getFullYear()}-${to.getMonth()}-${to.getDay()}?pageSize=100`, {
      method: 'GET',
      headers: this.headers,
    });
  }
}
