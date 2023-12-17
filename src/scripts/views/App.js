import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  //   const skipContent = document.querySelector('.link');
  //   const main = document.querySelector('#content');
  //   const hero = document.querySelector('#hero');
  //   skipContent.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     main.scrollIntoView({ behavior: 'smooth' });
  //     skipContent.blur();
  //   });
  //   if (url !== '/') {
  //     hero.style.display = 'none';
  //   } else {
  //     hero.style.display = 'block';
  //   }
  }
}

export default App;