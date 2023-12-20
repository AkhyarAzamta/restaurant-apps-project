import { openDB } from 'idb';
import CONFIG from '../global/config';

const {
  DB_NAME,
  DB_VERSION,
  OBJECT_STORE_NAME,
} = CONFIG;

const openIdb = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    db.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
      autoIncrement: true,
    });
  },
});

const FavoriteIdb = {
  async getResto(id) {
    if (!id) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return (await openIdb).get(OBJECT_STORE_NAME, id);
  },

  async getAllResto() {
    return (await openIdb).getAll(OBJECT_STORE_NAME);
  },

  async putResto(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return (await openIdb).put(OBJECT_STORE_NAME, restaurant);
  },

  async deleteResto(id) {
    return (await openIdb).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteIdb;
