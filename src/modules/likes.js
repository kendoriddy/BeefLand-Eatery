import defaultConfig from '../../config/default.js';

const BeefCards = document.querySelector('.beef-cards');

const likes = () => {
  BeefCards.addEventListener('click', (e) => {
    const clicked = e.target.closest('.like-icon');

    const item = clicked.getAttribute('id');
    fetch(defaultConfig.INVOLVEMENT_API_BASEURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        item_id: item,
      }),
    });
    fetch(defaultConfig.INVOLVEMENT_API_BASEURL)
      .then((response) => response.json())
      .then((data) => {
        const likeCount = document.querySelector(`.likes-${item}`);
        likeCount.querySelector('span').textContent = `${
          data?.filter((items) => items.item_id === item)[0].likes
        } likes`;
      });
  });
};

const displayLikes = () => {
  fetch(defaultConfig.INVOLVEMENT_API_BASEURL)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const likeCount = document.querySelector(`.likes-${item.item_id}`);
        likeCount.querySelector('span').textContent = `${item.likes} likes`;
      });
    })
    .catch((error) => error);
};
displayLikes();
export { likes, displayLikes };
