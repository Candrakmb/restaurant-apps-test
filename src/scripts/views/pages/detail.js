import RestaurantSource from '../../data/restaurant-resource';
import urlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import addReview from '../../utils/post-review';
import '../component/loader';
import { createDetailRestoTemplate } from '../template/template-creator';

const Detail = {
    async render() {
        return `
        <loader-content></loader-content>
        <div class="detail-content"></div>
        <div id="likeButtonContainer"></div>`;
    },

    async afterRender() {
        const url = urlParser.parseActiveUrlWithoutCombiner();
        const detailContainer = document.querySelector('.detail-content');
        const loader = document.querySelector('.loader-wrapper');
        try {
            const data = await RestaurantSource.detailResto(url.id);
            detailContainer.innerHTML = createDetailRestoTemplate(data.restaurant);
            addReview.release(url);
            LikeButtonPresenter.init({
                likeButtonContainer: document.querySelector('#likeButtonContainer'),
                restaurant: {
                    id: data.restaurant.id,
                    name: data.restaurant.name,
                    address: data.restaurant.address,
                    city: data.restaurant.city,
                    rating: data.restaurant.rating,
                    pictureId: data.restaurant.pictureId,
                    description: data.restaurant.description,
                },
            });
            loader.style.display = 'none';
        } catch (error) {
            loader.style.display = 'none';
        }
    },

};

export default Detail;
