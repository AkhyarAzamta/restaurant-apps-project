/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#fav-resto');
  I.see(
    'Empty favorite Resto',
    '#fav-resto',
  );
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(
    'Empty favorite Resto',
    '#fav-resto',
  );

  I.amOnPage('/');

  I.waitForElement('.card-content-title', 2);
  I.seeElement('.card-content-title');

  const firstRestaurant = locate('.card-content-title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  // I.waitForElement('.card', 5);
  I.seeElement('.card');

  const likedRestaurantName = await I.grabTextFrom('.card-content-title');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.seeElement('.card-content-title');
});

Scenario('unlike one restaurants', async ({ I }) => {
  I.see(
    'Empty favorite Resto',
    '#fav-resto',
  );

  I.amOnPage('/#');

  I.waitForElement('.card-content-title', 2);
  I.seeElement('.card-content-title');

  const firstRestaurant = locate('.card-content-title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.waitForElement('.card', 2);
  I.seeElement('.card');

  const likedRestaurantName = await I.grabTextFrom('.card-content-title');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.seeElement('.card-content-title');

  const firstRestaurantLiked = locate('.card-content-title').first();
  I.click(firstRestaurantLiked);

  I.waitForElement('#likeButton', 2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.waitForElement('#fav-resto', 2);
  I.see(
    'Empty favorite Resto',
    '#fav-resto',
  );
});
