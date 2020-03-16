export default function renderSavedArticles(mainApi, newsCardList) {
  mainApi.getUserData()
    .then((data) => {
      const { name } = data;
      return mainApi.getArticles()
        .then((articles) => {
          document.querySelector('.title_info').textContent = `${name}, у вас ${articles.length} сохранённых статей`;

          if (articles.length) {
            let keywords = articles.reduce((prev, article) => {
              const counter = prev.find((item) => article.keyword === item.keyword);
              if (counter) {
                counter.number += 1;
              } else {
                prev.push({ keyword: article.keyword, number: 1 });
              }
              return prev;
            }, []);

            const spans = document.querySelectorAll('.content__bold');

            keywords = keywords.sort((a, b) => (b.number - a.number));

            spans[0].insertAdjacentText('beforebegin', 'По ключевым словам: ');
            spans[0].textContent = keywords[0].keyword;

            if (keywords.length >= 2) {
              spans[1].insertAdjacentText('beforebegin', ', ');
              spans[1].textContent = keywords[1].keyword;
            }

            if (keywords.length >= 3) {
              spans[2].insertAdjacentText('beforebegin', ' и ');
              spans[2].textContent = `${keywords.length - 2} другим`;
            }

            newsCardList.renderSavedArticles(articles);
          }
        });
    })
    .catch(() => {
      window.location.href = '../';
    });
}
