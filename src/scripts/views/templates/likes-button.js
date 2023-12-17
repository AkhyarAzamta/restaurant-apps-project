const likeButtonTemplate = () => `
  <button aria-label="tambahkan ke favorit" id="likeButton" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const likedButtonTemplate = () => `
  <button aria-label="hapus dari favorit" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export { likeButtonTemplate, likedButtonTemplate };
