/* eslint-disable no-undef */
// import { spyOn } from 'jest-mock';
import FavoriteIdb from '../src/scripts/data/idb';
import * as TesFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
    // spyOn(FavoriteIdb, 'searchMovies');
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TesFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="tambahkan ke favorit"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TesFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="hapus dari favorit"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TesFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteIdb.getResto(1);

    expect(restaurant).toEqual({ id: 1 });
    await FavoriteIdb.deleteResto(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TesFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteIdb.putResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteIdb.getAllResto()).toEqual([{ id: 1 }]);

    await FavoriteIdb.deleteResto(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TesFactories.createLikeButtonPresenterWithRestaurant({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteIdb.getAllResto()).toEqual([]);
  });
});
