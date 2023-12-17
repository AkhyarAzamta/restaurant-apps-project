import Spinner from '../templates/spinner-loader';
import DataSource from '../../data/source';
import restoCard from '../templates/resto-card';
import { initSwalError } from '../../utils/swal-initiator';

const Home = {
  async render() {
    return `
      <div tabindex="0" class="container">
        <div id="loading"></div>
        <div id="content">
          <h1 tabindex="0" class="content_title">Explore Restaurant</h1>
          <section id="explore"></section>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const containerContent = document.querySelector('#content');
    const exploreContent = document.querySelector('#explore');

    containerContent.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const data = await DataSource.getRestaurantList();
      data.restaurants.forEach((restaurant) => {
        exploreContent.innerHTML += restoCard(restaurant);
      });
      loading.style.display = 'none';
      containerContent.style.display = 'block';
    } catch (err) {
      console.error(err);
      containerContent.style.display = 'block';
      loading.style.display = 'none';
      exploreContent.innerHTML = `Error: ${err.message}`;
      initSwalError(err.message);
    }
  },
};

export default Home;
