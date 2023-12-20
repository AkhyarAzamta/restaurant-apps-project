import FavoriteIdb from '../data/idb';
import { likeButtonTemplate, likedButtonTemplate } from '../views/templates/likes-button';
import { initSwalSuccess } from './swal-initiator';

const LikeButtonInitiator = {
  async init({
    likeButtonContainer,
    data,
    // FavoriteIdb,
  }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = data.restaurant;
    // this._favoriteIdb = FavoriteIdb;
    await this._renderButton();
  },
  async _renderButton() {
    // console.log(`halo gaessss ${this._favoriteIdb}`);
    // try {
    const { id } = this._restaurant;

    // get resto in indexed db
    const restaurant = await FavoriteIdb.getResto(id);

    if (restaurant) {
      this._renderLikedButtonTemplate();
    } else {
      this._renderLikeButtonTemplate();
    }
    // } catch (err) {
    //   console.error(err);
    //   initSwalError(err.message);

    //   throw new Error(err);
    // }
  },

  _renderLikeButtonTemplate() {
    this._likeButtonContainer.innerHTML = likeButtonTemplate(); // append html

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      // onClick fav the selected resto
      await FavoriteIdb.putResto(this._restaurant);
      initSwalSuccess('Resto favorited!');
      this._renderButton();
    });
  },

  _renderLikedButtonTemplate() {
    this._likeButtonContainer.innerHTML = likedButtonTemplate(); // append html

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      // onClick unfav the selected resto
      await FavoriteIdb.deleteResto(this._restaurant.id);
      initSwalSuccess('Resto unfavorited!');
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
