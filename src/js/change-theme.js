import theme from '../theme.json';
const refs = {
  body: document.querySelector('body'),
  themeSwitch: document.querySelector('.theme-switch__toggle'),
};
if (localStorage.getItem('theme')) {
  refs.body.classList.add(localStorage.getItem('theme'));
  refs.themeSwitch.checked = refs.body.classList.contains(theme.DARK)
    ? true
    : false;
}

refs.themeSwitch.addEventListener('input', changeThemeHandler);
function changeThemeHandler() {
  if (refs.themeSwitch.checked) {
    refs.body.classList.add(theme.DARK);
    refs.body.classList.remove(theme.LIGHT);
    localStorage.setItem('theme', theme.DARK);
  } else {
    refs.body.classList.add(theme.LIGHT);
    refs.body.classList.remove(theme.DARK);
    localStorage.setItem('theme', theme.LIGHT);
  }
}
