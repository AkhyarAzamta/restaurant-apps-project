import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/App';
import swRegister from './utils/sw-register';
import { WebSocketInitiator } from './utils/websocket-initiator';
import CONFIG from './global/config';
import './components/main';

const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('.navbar-list'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('#content').scrollIntoView();
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
