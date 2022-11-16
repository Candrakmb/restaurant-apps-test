import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import '../component/loader';
import { createRestoItemTemplate, EmptyFavoriteResto } from '../template/template-creator';

const Favorite = {
    async render() {
        return `
        <loader-content></loader-content>
        <div class="favorire-title">
            <h2 class="title__content" tabindex="0">
                Favorite Restaurant
            </h2>
            <div class="line_small" ></div>
            <div class="line_big"></div>
            <div class="line_small"></div>
        </div>

        <div id="favoriteContainer">
        </div>`;
    },
    async afterRender() {
        const favoriteContainer = document.querySelector('#favoriteContainer');
        const content = document.querySelector('.main');
        const loader = document.querySelector('.loader-wrapper');
        const restaurants = await FavoriteRestoIdb.getAllResto();

        if (restaurants.length === 0) {
            content.innerHTML += EmptyFavoriteResto();
            document.querySelector('.loader-wrapper').style.display = 'none';
        } else {
            restaurants.forEach((restaurant) => {
                favoriteContainer.innerHTML += createRestoItemTemplate(restaurant);
            });
            loader.style.display = 'none';
        }
    },
};

export default Favorite;
