import '../component/hero-element';
import '../component/eksplor-restaurants';
import '../component/loader';
import '../component/social-media';
import RestaurantSource from '../../data/restaurant-resource';
import { createRestoItemTemplate } from '../template/template-creator';

const Home = {
    async render() {
        return `
        <loader-content></loader-content>
        <hero-element></hero-element>
        <eksplor-restaurants></eksplor-restaurants>
        <social-media></social-media>
        `;
    },

    async afterRender() {
        const listRestoElement = document.querySelector('#restaurants');
        const loader = document.querySelector('.loader-wrapper');
        try {
            const restaurantsListDb = await RestaurantSource.listResto();
            restaurantsListDb.restaurants.forEach((restaurant) => {
                listRestoElement.innerHTML += createRestoItemTemplate(restaurant);
            });
            loader.style.display = 'none';
        } catch {
            loader.style.display = 'none';
            // eslint-disable-next-line no-alert
            alert('Sorry, your device is offline');
        }
    },
};

export default Home;
