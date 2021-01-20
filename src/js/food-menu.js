import foodMenuList from '../menu.json';
import foodMenuTemplate from '../templates/food-menu.hbs';
function renderMarkup(itemList, template, ref) {
  ref.insertAdjacentHTML('beforeend', template(itemList));
}
const foodMenuRef = document.querySelector('.js-menu');
renderMarkup(foodMenuList, foodMenuTemplate, foodMenuRef);
