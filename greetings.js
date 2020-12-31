const form = document.querySelector('.js-form'),
      input = form.querySelector('input'),
      greetings = document.querySelector('.js-greetings');
const USER_LS = 'currentUsername',
      SHOWING_CN = 'showing';

function showGreeting(text) {
    greetings.innerText = `Привет, ${text}`;
    greetings.classList.add(SHOWING_CN);
    form.classList.remove(SHOWING_CN);
}

function loadUsername() {
    const currentUsername = localStorage.getItem(USER_LS);
    if (currentUsername === null) {
        // если пользователь не найден
    } else {
        showGreeting(currentUsername);
    }
}

function init() {
    loadUsername();
}

init();