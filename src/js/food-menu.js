import foodMenuList from '../menu.json';
import foodMenuTemplate from '../templates/food-menu.hbs';

const menuMarkup = foodMenuTemplate(foodMenuList);
//console.log(menuMarkup);
const foodMenuRef = document.querySelector('.js-menu');
foodMenuRef.insertAdjacentHTML('beforeend', menuMarkup);
