/* eslint-disable no-undef */
import FavoriteIdb from '../src/scripts/data/idb';
import * as TesFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteIdb.deleteResto(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TesFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="hapus dari favorit"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TesFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="tambahkan ke favorit"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TesFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="hapus dari favorit"]').dispatchEvent(new Event('click'));

    expect(await FavoriteIdb.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TesFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteIdb.deleteResto(1);

    document.querySelector('[aria-label="hapus dari favorit"]').dispatchEvent(new Event('click'));

    expect(await FavoriteIdb.getAllResto()).toEqual([]);
  });
});
