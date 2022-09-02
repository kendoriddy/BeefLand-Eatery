export default class Meal {
  // Initialization
  constructor() {
    this.API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=beef';
    this.INV_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vuFst9MhB4jbZDaMQsbn/comments';
    this.mealPopup = document.getElementById('meals-popup');
  }

  // Get meals from Api, throw error if promise was not resoved
  //  otherwise popup meal if comment button is clicked

   getMeal = async () => {
     const response = await fetch(this.API_URL);
     const data = await response.json().catch((error) => new Error(error));
     this.popupMeal(data);
   };

    //  Function that display meal when comment button is cloked
    popupMeal = (data) => {
      const selectAllMeal = document.querySelectorAll('.show-meal');
      selectAllMeal.forEach((item, index) => {
        item.addEventListener('click', () => {
          const mealContainer = document.createElement('section');
          mealContainer.className = 'modal-container';
          mealContainer.id = index;
          mealContainer.innerHTML = `
        <div class="close"><img class="close" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" alt="close-button"></div> 
         <div class="card-image">
         <img src="${data.meals[index].strMealThumb}">
         </div>
         <div class="card-content">
          <div class="first-part">
           <h2>${data.meals[index].strMeal}</h2>      
           </div>       
          </div>                     
          <div id="comment${index}"></div>
          <h2 class="add-comment">Add a comment</h2>
          <form id="form${index}">        
          <input type="text" id="name${index}" placeholder="Your name" required><br>
          <textarea name="text-area" id="text${index}" class="text-area" placeholder="Your comment..." rows="5" maxlength="300" required></textarea><br>
          </form>
          <button class="comment-btn" type="button">Comment</button>
          `
         ;
          this.mealPopup.appendChild(mealContainer);
          const commentId = document.getElementById(`comment${index}`);
          this.getComment(commentId, index);
          const comment = document.querySelectorAll('.comment-btn');
          this.addCommentOnPopup(comment, index);
          this.closeMeal(index);
        });
      });
    }

    //  Add comment on Popup
    addCommentOnPopup = async (comments, index) => {
      comments.forEach((item) => {
        item.addEventListener('click', (event) => {
          event.preventDefault();
          const commentId = document.getElementById(`comment${index}`);
          const nameValue = document.getElementById(`name${index}`).value;
          const commentValue = document.getElementById(`text${index}`).value;
          const formId = document.getElementById(`form${index}`);
          if (nameValue === '' || commentValue === '') return;

          const commentData = {
            item_id: `item${index}`,
            username: nameValue,
            comment: commentValue,
          };
          const commentString = JSON.stringify(commentData);
          const data = JSON.parse(commentString);
          this.addComment(data, commentId, index);
          formId.reset();
        });
      });
    }

    const displayComment = (commentData, commentId) => {
      let commentContainer = '';
      const commentCount = document.createElement('div');
      commentCount.className = 'comment-count';
      commentCount.innerHTML = Comment (commentData.length);
      commentData.forEach((item) => {
        const commentContent =       
         <div class="comment-container">${item.creation_date}<br>${item.username}: ${item.comment}</div>     
      ;
        commentContainer += commentContent;
      });
      commentId.innerHTML = commentContainer;
      commentId.insertBefore(commentCount, commentId.children[0]);
  