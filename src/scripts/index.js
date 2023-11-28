import 'regenerator-runtime';
// css
import '../styles/main.css';
// json
import DATA from '../public/data/DATA.json';

// toggle nav
document.querySelector('.menu').addEventListener('click', function () {
  document.querySelector('.navbar-list').classList.toggle('navbar-list-block');
});
// JavaScript
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.width = '100%';
  });
  card.addEventListener('mouseout', () => {
    card.style.width = '200px'; 
  });
});

function getRestaurants(data) {
  let restoHTML = '';
  data.restaurants.forEach((resto, i) => {
    restoHTML += `
      <div tabindex="0" class="card">
      <div class="img-container">
      <span class="city">${resto.city}</span>
      <img tabindex="0" class="card-image" alt="${resto.name}" src="${resto.pictureId}"/>
      <span tabindex="0" class="card-rating">
      <i title="ratings" class="fa fa-star"></i>
            <span>${resto.rating}</span>
          </span>
        </div>
        <div tabindex="0" class="card-content">
          <p class="card-content-title">${resto.name} - ${resto.city}</p>
          <p class="truncate">${resto.description}</p>
        </div>
      </div>
      `;
  });
  // append to DOM
  document.getElementById('explore').innerHTML = restoHTML;
}
getRestaurants(DATA);
