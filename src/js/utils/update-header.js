export default function updateHeader(header, mainApi) {
  if (localStorage.getItem('jwt')) {
    mainApi.getUserData()
      .then((data) => {
        header.render({ isLoggedIn: true, userName: data.name });
      })
      .catch(() => {
        header.render({ isLoggedIn: false });
      });
  } else {
    header.render({ isLoggedIn: false });
  }
}
