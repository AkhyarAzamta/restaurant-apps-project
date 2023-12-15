import { Workbox } from 'workbox-window';

const swRegister = () => {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('./sw.js');
    wb.addEventListener('waiting', () => {
      console.log("A new service worker has installed, but it can't activate until all tabs running the current version have fully unloaded.");
    });
    wb.addEventListener('activated', (event) => {
      if (!event.isUpdate) {
        console.log('Service worker activated for the first time!');
      }
    });
    wb.register();
  }
};

export default swRegister;
