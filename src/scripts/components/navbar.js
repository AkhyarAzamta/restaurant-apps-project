class NavigationBar extends HTMLElement {
  constructor() {
    super();
    this.toggleNavbarListBlock = this.toggleNavbarListBlock.bind(this);
    this.scrollToFavorite = this.scrollToFavorite.bind(this);
    this.scrollToElement = this.scrollToElement.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  toggleNavbarListBlock() {
    const navbarList = this.querySelector('.navbar-list');
    navbarList.classList.toggle('navbar-list-block');
  }

  scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      console.log('yowwww');
    }
  }

  scrollToFavorite() {
    this.scrollToElement('title_container');
    this.toggleNavbarListBlock(); // Tutup navbar setelah mengarahkan ke elemen favorit
  }

  render() {
    this.innerHTML = `
      <nav>
        <div class="brand">
          <div class="logo-content">
            <img src="../images/logo.png" alt="logo" class="logo-img">
            <a href="/" class="font-brand"> NongkiSkuy </a>
          </div>
          <div class="container">
            <a href="#content" class="link"></a>
            <button class="menu" aria-label="dropdown mobile" type="button">
              <span class="fa fa-bars"></span>
            </button>
          </div>
        </div>
        <ul class="navbar-list">
          <li class="navbar-item"><a href="/">Home</a></li>
          <li class="navbar-item">
            <a id="favoriteLink" href="#/favorite" >Favorite</a>
          </li>
          <li class="navbar-item">
            <a href="https://www.linkedin.com/in/akhyarazamta/" target="_blank" rel="noopener noreferrer">About US</a>
          </li>
        </ul>
      </nav>
    `;

    // Tambahkan event listener pada elemen <a> dengan id "favoriteLink"
    const favoriteLink = this.querySelector('#favoriteLink');
    favoriteLink.addEventListener('click', this.scrollToFavorite);
  }
}

customElements.define('navigation-bar', NavigationBar);
