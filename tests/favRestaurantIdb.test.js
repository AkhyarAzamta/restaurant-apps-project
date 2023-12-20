/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestoContract';
import FavoriteIdb from '../src/scripts/data/idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteIdb.getAllResto()).forEach(async (restaurant) => {
      await FavoriteIdb.deleteResto(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteIdb);
});
