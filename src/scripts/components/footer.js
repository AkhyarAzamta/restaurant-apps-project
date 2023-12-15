class CustomFooterComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
      <p>Copyright © 2023 - NongkiSkuy</p>
      </footer>
    `;
  }
}

customElements.define('custom-footer-component', CustomFooterComponent);
