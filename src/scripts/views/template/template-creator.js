import CONFIG from '../../globals/config';

const createRestoItemTemplate = (restaurant) => `
    <div class="resto__item" tabindex="0">
        <img class="img lazyload" src="./images/placeholder.svg" data-src="${CONFIG.BASE_IMAGE_SMALL + restaurant.pictureId}"
            width="300px" alt="restaurant ${restaurant.name}">
            <div class="rating__resto">
            <div class="gap">
                <span> &#11088  ${restaurant.rating}</span>
            </div>
        </div>
        <h3 class="title__resto"><a href="${`/#/detail/${restaurant.id}`}" tabindex="0">${restaurant.name}</a></h3>
        <div class="location">
            <img class="marker" src="./images/icons/marker-solid.svg">
            <p tabindex="0">${restaurant.city}</p>
        </div>
        <p class="description" tabindex="0">${restaurant.description}</p>
    </div>`;

const createDetailRestoTemplate = (restaurant) => `
    <div class="detail-header">
        <div class="image-resto"><img class="lazyload" src="./images/placeholder.svg" data-src="${CONFIG.BASE_IMAGE_MEDIUM + restaurant.pictureId}" alt="${restaurant.name}"></div>
        <div class="branding">
            <h1 tabindex="0">${restaurant.name}</h1>
            <p tabindex="0"><img class="road" src="./images/icons/road-solid.svg"> ${restaurant.city}</p>
            <p tabindex="0"><img class="marker" src="./images/icons/marker-solid.svg"> ${restaurant.address}</p>
            <p tabindex="0"><img class="star" src="./images/icons/star-solid.svg"> ${restaurant.rating}</p>
            <hr class="line-border">
            <div class="categories">
                <p>Category :</p>
                ${restaurant.categories.map((category) => `<button class="btn-category" aria-label="category">${category.name}</button>`).join(' ')}
            </div>
        </div>
    </div>
    <div class="detail-body">  
        <div class="description tabindex="0"">
            <h2>Description</h2>
            <p tabindex="0">${restaurant.description.slice(0, 250).concat('...')}</p>
        </div>
        <div class="menus">
            <h2 tabindex="0">Daftar menu</h2>
            <div class="menu-container">
                <div class="food-menu card">
                    <h3 tabindex="0">Food</h3>
                    <ul class="food-list">
                    ${restaurant.menus.foods.map((food) => `<li tabindex="0">${food.name}</li>`).join(' ')}
                    </ul>
                </div>
                <div class="drink-menu card">
                    <h3 tabindex="0">Drink</h3>
                    <ul class="drink-list">
                    ${restaurant.menus.drinks.map((drink) => `<li tabindex="0">${drink.name}</li>`).join(' ')}
                    </ul>
                </div>
            </div>
        </div>
        <div id="customerReview">
            <h2 tabindex="0">Customer Review ( <span>${restaurant.customerReviews.length}</span> )</h2>
            <div class="list-review">
                
            </div>  
              
            <button id="submitReview" aria-label="Submit your review"></button>
        </div>
    </div>`;

const createReviewTemplate = (data) => {
    let dataReviewer = '';
    data.forEach((review) => {
        dataReviewer += `
        <div class="item-review card">
            <h3>${review.name}</h3>
            <p id="date">${review.date}</p>
            <hr>
            <p id="commentReview">${review.review}</p>
        </div>`;
    });
    return dataReviewer;
};

const createLikeRestoButton = () => `
    <button id="likeButton" class="btn btn-like" aria-label="add to favorite">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>`;

const createUnlikeRestoButton = () => `
    <button id="likeButton" class="btn btn-like" aria-label="remove from favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
    </button>`;

const EmptyFavoriteResto = () => `
<div class="empty-favorite">
    <h3 tabindex="0">Masih kosong nih</h3>
    <p tabindex="0">ayo tambahkan restaurant favorit kalian!</p>
</div>`;

export {
    createRestoItemTemplate,
    createDetailRestoTemplate,
    createReviewTemplate,
    createLikeRestoButton,
    createUnlikeRestoButton,
    EmptyFavoriteResto,
};
