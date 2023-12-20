import 'regenerator-runtime';
import '../styles/main.css';
import 'lazysizes';
import App from './views/App';
import swRegister from './utils/sw-register';
import { WebSocketInitiator } from './utils/websocket-initiator';
import CONFIG from './global/config';
import './components/main';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
/* eslint-disable no-unused-vars */
const START = 10;
const NUMBER_OF_IMAGES = 100;

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
