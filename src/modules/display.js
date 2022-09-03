import defaultConfig from '../../config/default.js';

const cardContainer = document.querySelector('.beef-cards');

const displayMeal = (data) => {
  const beefCard = document.createElement('div');
  beefCard.classList.add('beef-card');
  beefCard.innerHTML = `
    <div class="beef-image">
          <img src="${data.strMealThumb}"/>
          </div>
          <div class="card-content">
           <div class="top-part">
            <h2>${data.strMeal}</h2>
            <div class='like-meal likes-${data.idMeal}'>
            <i class="fa-solid fa-heart like-icon" id='${data.idMeal}'></i> 
            <span class='like-count ${data.idMeal}' id='${data.idMeal}'>0 like</span>
            </div>
           </div>
            <div class="next-part">
            <button class="show-meal">Comments</button>
            <button>Reservation</button>
            </div>
          </div>
    `;
  cardContainer.appendChild(beefCard);
};

const getMeal = async () => {
  const res = await fetch(defaultConfig.BEEF_API_URL);
  const data = await res.json();
  data.meals.forEach((beef) => {
    displayMeal(beef);
  });
};

export default getMeal;