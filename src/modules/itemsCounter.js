/**
 * @jest-environment jsdom
 */

 import defaultConfig from '../../config/default.js';

const counter = document.querySelector('.item-counter');

const itemCounter = () => {
  fetch(defaultConfig.BEEF_API_URL)
    .then((response) => response.json())
    .then((data) => {
      const meal = data.meals;
      const count = meal.length;
      counter.innerHTML = `(${count})`;
    });
};
export default itemCounter;
itemCounter();
