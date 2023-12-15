const likeButtonTemplate = () => `
  <button aria-label="like this" id="likeButton" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const likedButtonTemplate = () => `
  <button aria-label="unlike this" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export { likeButtonTemplate, likedButtonTemplate };
