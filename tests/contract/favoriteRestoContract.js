/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

const itActsAsFavoriteRestaurantModel = (favoriteResto) => {
  it('should return the restaurant that has been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });

    expect(await favoriteResto.getResto(1))
      .toEqual({ id: 1 });
    expect(await favoriteResto.getResto(2))
      .toEqual({ id: 2 });
    expect(await favoriteResto.getResto(3))
      .toEqual(undefined);
  });

  it('should refuse a Restaurant from being added if it does not have the correct property', async () => {
    favoriteResto.putResto({ aProperty: 'property' });

    expect(await favoriteResto.getAllResto())
      .toEqual([]);
  });

  it('can return all of the Restaurants that have been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });

    expect(await favoriteResto.getAllResto())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite Restaurant', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });
    favoriteResto.putResto({ id: 3 });

    await favoriteResto.deleteResto(1);

    expect(await favoriteResto.getAllResto())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });
    favoriteResto.putResto({ id: 3 });

    await favoriteResto.deleteResto(4);

    expect(await favoriteResto.getAllResto())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteRestaurantModel };
