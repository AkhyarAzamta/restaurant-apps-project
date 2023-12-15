/* eslint-disable indent */
import CONFIG from '../../global/config';

const restoCard = (resto) => `
    <div class="card">
      <a href="#/detail/${resto.id}" class="card-a-tag">
      <div class="img-container">
      <span class="city">${resto.city}</span>
          <img class="card-image" crossorigin="anonymous" alt="${resto.name}" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"/>
          <span class="card-rating">
            <i title="ratings" class="fa fa-star"></i>
            <span>${resto.rating}</span>
          </span>
        </div>
        <div class="card-content">
          <h2 class="card-content-title">${resto.name} - ${resto.city}</h2>
          <p class="truncate">${resto.description}</p>
        </div>
      </a>
    </div>
  `;

export default restoCard;
