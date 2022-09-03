/* eslint-disable import/extensions */
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import './style.css';
import display from './modules/display.js';
import { likes, displayLikes } from './modules/likes.js';
import itemCounter from './modules/itemsCounter.js';
import Meal from './modules/comment.js';

display();
likes();
displayLikes();
itemCounter();
const beefMeal = new Meal();
beefMeal.getMeal();
