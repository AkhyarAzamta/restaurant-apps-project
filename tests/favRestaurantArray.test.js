/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestoContract';

let FavoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return FavoriteRestaurants.find((restaurant) => restaurant.id === id);
  },

  getAllResto() {
    return FavoriteRestaurants;
  },

  putResto(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getResto(restaurant.id)) {
      return;
    }

    FavoriteRestaurants.push(restaurant);
  },

  deleteResto(id) {
    FavoriteRestaurants = FavoriteRestaurants.filter((restaurant) => restaurant.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    FavoriteRestaurants = [];
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
