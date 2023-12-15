import FavoriteIdb from '../../data/idb';
import restoCard from '../templates/resto-card';

const Favorite = {
  async render() {
    return `
      <div class="container">
        <h2 id="title_container" class="title-container">Favorited Resto</h2>
        <section id="fav-resto"></section>
      </div>
    `;
  },

  async afterRender() {
    const data = await FavoriteIdb.getAllResto();
    const favRestoContainer = document.querySelector('#fav-resto');
    if (data.length === 0) {
      favRestoContainer.innerHTML = `Empty favorite Resto. Put one, by clicking heart button in the detail page 
      `;
    }
    data.forEach((resto) => {
      favRestoContainer.innerHTML += restoCard(resto);
    });
  },
};

export default Favorite;
