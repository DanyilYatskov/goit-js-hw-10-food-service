import theme from '../theme.json';
const refs = {
  body: document.querySelector('body'),
  themeSwitch: document.querySelector('.theme-switch__toggle'),
};
refs.body.classList = localStorage.getItem('theme');
refs.themeSwitch.checked = refs.body.classList.contains('light-theme')
  ? false
  : true;
refs.themeSwitch.addEventListener('input', changeThemeHandler);
function changeThemeHandler() {
  if (refs.themeSwitch.checked) {
    refs.body.classList.add(theme.DARK);
    refs.body.classList.remove(theme.LIGHT);
  } else {
    refs.body.classList.add(theme.LIGHT);
    refs.body.classList.remove(theme.DARK);
  }
  localStorage.setItem('theme', refs.body.classList);
}
