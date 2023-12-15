class ContentContainer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container_text">
      <h1 class="container_title">Welcome to NongkiSkuy</h1>
        <p class="container_subtitle">Irresistible Flavors, Unforgettable Experience</p>
      <a href="#content" class="btn">Read More</a>
    </div>
    `;
  }
}

customElements.define('content-container', ContentContainer);
