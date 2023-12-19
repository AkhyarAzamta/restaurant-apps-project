import DataSource from '../../data/source';
import restoCard from '../templates/resto-card';

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
    const exploreContent = document.querySelector('#explore');
    const data = await DataSource.getRestaurantList();
    data.restaurants.forEach((restaurant) => {
      exploreContent.innerHTML += restoCard(restaurant);
    });
  },
};

export default Home;
