/* eslint-disable indent */
import CONFIG from '../../global/config';

const restoCard = (resto) => `
    <div class="card">
      <a tabindex="0" href="#/detail/${resto.id}" class="card-a-tag">
      <div class="img-container">
      <span aria-label="Lokasi di ${resto.city}," class="city">${resto.city}</span>
      <pictu>
      <source media="(max-width: 600px)" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}">
      <img class="card-image lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" 
      </pictu re>

          <span class="card-rating">
            <i aria-label="rating" class="fa fa-star"></i>
            <span>${resto.rating}</span>
          </span>
        </div>
        <div class="card-content">
          <h2 aria-label=",nama restoran ${resto.name}" class="card-content-title">${resto.name}</h2>
          <p aria-label=",deskripsi ${resto.description}" class="truncate">${resto.description}</p>
        </div>
      </a>
    </div>
  `;

export default restoCard;
