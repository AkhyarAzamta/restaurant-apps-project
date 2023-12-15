import RestaurantSource from '../data/source';

const PostReview = async (
  url,
  name,
  review,
) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };

  const reviewContainer = document.querySelector('.detail-review');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newReview = `
    <div class="detail-item-review">
      <div class="header-review">
        <p class="name-review">${name}</p>
          <p class="date-review">${date}</p>
        </div>
      <div class="body-review">${review}</div>
    </div>
  `;

  const reviewResponse = await RestaurantSource.postRestaurantReview(dataInput);
  console.log(
    '🚀 ~ file: post-review.js ~ line 33 ~ PostReview ~ reviewResponse',
    reviewResponse,
  );
  reviewContainer.innerHTML += newReview;
};

export default PostReview;
