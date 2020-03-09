const POPUP_LOGIN = `<form class="popup__form" name="login" id="login" novalidate>
    <button class="popup__close" name="close" type="button"></button>

    <h2 class="popup__title">Вход</h2>

    <div class=popup__data>
        <div class="popup__field">
            <label class="popup__label" for="login-email">Email</label>
            <input class="popup__input" name="email" id="login-email" type="email" placeholder="Введите почту" pattern=".+@.+\\..+" required>
            <span class="popup__error ">Неправильный формат email</span>
        </div>
        <div class="popup__field">
            <label class="popup__label" for="login-password">Пароль</label>
            <input class="popup__input" name="password" type="password" id="login-password" placeholder="Введите пароль" minlength="6" required>
            <span class="popup__error">Неправильный формат пароля</span>
        </div>
        <span class="popup__error popup__error_server">Не удалось войти</span>
    </div>
    <button class="button button_popup" name="button" id="login-button" type="submit">Войти</button>
    <span class="popup__switch">или <a class="popup__link popup__link_signup">Зарегистрироваться</a></span>
</form>`;

const POPUP_SIGNUP = `<form class="popup__form" name="signup" id="signup" novalidate>
    <button class="popup__close" name="close" type="button"></button>

    <h2 class="popup__title">Регистрация</h2>

    <div class=popup__data>
        <div class="popup__field">
            <label class="popup__label" for="signup-email">Email</label>
            <input class="popup__input" name="email" id="signup-email" type="email" placeholder="Введите почту" pattern=".+@.+\\..+" required>
            <span class="popup__error ">Неправильный формат email</span>
        </div>
        <div class="popup__field">
            <label class="popup__label" for="signup-password">Пароль</label>
            <input class="popup__input" name="password" id="signup-password" type="password" placeholder="Введите пароль" minlength="6" required>
            <span class="popup__error ">Неправильный формат пароля</span>
        </div>
        <div class="popup__field">
            <label class="popup__label" for="signup-name">Имя</label>
            <input class="popup__input" name="nickname" id="signup-name" type="text" placeholder="Введите своё имя" minlength="2" maxlength="30" required>
            <span class="popup__error ">Неправильный формат имени</span>
        </div>
        <span class="popup__error popup__error_server">Не удалось создать пользователя</span>
    </div>
    <button class="button button_popup" name="button" id="signup-button" type="submit">Зарегистрироваться</button>
    <span class="popup__switch">или <a class="popup__link popup__link_login">Войти</a></span>
</form>`;

const POPUP_SUCCESS = `<div class="popup__form popup__form_success">
    <button class="popup__close" name="close" type="button"></button>
    <h2 class="popup__title">Пользователь успешно зарегистрирован!</h2>
    <span class="popup__switch popup__switch_success"><a class="popup__link popup__link_success">Выполнить вход</a></span>
</div>`;

export { POPUP_LOGIN, POPUP_SIGNUP, POPUP_SUCCESS };
