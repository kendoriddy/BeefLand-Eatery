/* eslint-disable import/extensions */
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import './style.css';
import getMeal from './modules/display.js';
import { likes, displayLikes } from './modules/likes.js';
import itemCounter from './modules/itemsCounter.js';

import './assets/meal1.jpg';
import './assets/meal2.jpg';
import './assets/meal3.jpg';
import './assets/meal4.jpg';
import './assets/meal5.jpg';

getMeal();
likes();
displayLikes();
itemCounter();