import FavoriteIdb from '../data/idb';
import { likeButtonTemplate, likedButtonTemplate } from '../views/templates/likes-button';
import { initSwalError, initSwalSuccess } from './swal-initiator';

const LikeButtonInitiator = {
  async init({
    likeButtonContainer,
    data,
  }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = data.restaurant;
    await this._renderButton();
  },

  async _renderButton() {
    try {
      const { id } = this._restaurant;
      const restaurant = await FavoriteIdb.getResto(id);
      if (restaurant) {
        this._renderLikedButtonTemplate();
      } else {
        this._renderLikeButtonTemplate();
      }
    } catch (err) {
      console.error(err);
      initSwalError(err.message);
      throw new Error(err);
    }
  },

  _renderLikedButtonTemplate() {
    this._likeButtonContainer.innerHTML = likedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteIdb.deleteResto(this._restaurant.id);
      initSwalSuccess('Remove to favorited!');
      this._renderButton();
    });
  },
  _renderLikeButtonTemplate() {
    this._likeButtonContainer.innerHTML = likeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteIdb.putResto(this._restaurant);
      initSwalSuccess('Add to favorited!');
      this._renderButton();
    });
  },

};

export default LikeButtonInitiator;
