/* eslint-disable indent */
import CONFIG from '../../global/config';

const restoDetail = (resto) => `
<div class="detail">
    <div tabindex="0" class="img-container">
    <span aria-label="Lokasi di ${resto.city}," class="city">${resto.city}</span>
        <img class="detail-img lazyload" alt="" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"/>
    <ul class="detail-info">
      <li>
        <i class="fas fa-store-alt icon-primary"></i>
        <p aria-label="nama restauran ${resto.name}," class="detail-name-address-rating">${resto.name}</p>
      </li>
      <li>
        <i title="Alamat" class="fas fa-map-marker-alt icon-primary"></i>
        <p class="detail-name-address-rating">${resto.address}</p>
      </li>
      <li>
        <i title="ratings" class="fas fa-star icon-primary"></i>
        <p class="detail-name-address-rating">${resto.rating}</p>
      </li>
      <li><p tabindex="0" aria-label=",deskripsi restoran ${resto.description}" class="detail-desc">${resto.description}</p></li>
      <li tabindex="0">Category : 
      ${resto.categories
    .map(
      (category) => `
            <span class="category">${category.name}</span>
          `,
    )
    .join('')
  }
      </li>
    </ul>
    </div>
    <h3 tabindex="0">Menu</h3>
    <div class="detail-menu">
      <div tabindex="0" aria-label="menu makanan," class="detail-food">
        <h4>Food</h4>
        <ul>
          ${resto.menus.foods
    .map(
      (food, i) => `
                <li tabindex="0"><p>${i + 1}) ${food.name}</p></li>
              `,
    )
    .join('')}
        <ul>
      </div>
      <div tabindex="0" aria-label="menu minuman" class="detail-drink">
        <h4>Drink</h4>
        <ul>
          ${resto.menus.drinks
    .map(
      (drink, i) => `
                <li tabindex="0"><p>${i + 1}) ${drink.name}</p></li>
              `,
    )
    .join('')
  }
        <ul>
      </div>
    </div>
    <h3 tabindex="0" class="title-review">Reviews</h3>
    <div class="detail-review">
    ${resto.customerReviews
    .map(
      (review) => `
    <div tabindex="0" class="detail-item-review">
      <div class="header-review">
        <p aria-label="nama reviewers ${review.name}," class="name-review">${review.name}</p>
          <p class="date-review">${review.date}</p>
        </div>
      <div aria-label=",deskripsi ${review.review}" class="body-review">${review.review}</div>
    </div>
        `,
    )
    .join('')
  }
    </div>
  </div>
`;

export default restoDetail;
