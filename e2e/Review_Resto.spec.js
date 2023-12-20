/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Post resto review', async ({ I }) => {
  const reviewText = 'testing';

  I.waitForElement('.card', 4);
  I.seeElement('.card a');

  I.click({ xpath: '//*[contains(@class, "card")]/a' });

  I.wait(5); // Tunggu beberapa detik
  I.seeElement('.form-review form');

  I.fillField('#name-input', 'test review');
  I.fillField('#review-input', reviewText);
  I.seeElement('form');
  I.click('#submit-review');

  const lastReview = locate('.body-review').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(reviewText, lastReviewText.trim());
});
