const WebsocketNotif = {
  sendNotification({ title, options }) {
    const isAvailable = this._checkAvailability();
    const isPermitted = this._checkPermission();

    if (!isPermitted) {
      console.info('User did not yet granted permission');
      this._requestPermission();
      return;
    }

    if (!isAvailable) {
      console.info('Notification not supported in this browser');
      return;
    }

    this._showNotification({ title, options });
  },

  _checkPermission() {
    return Notification.permission === 'granted';
  },
  _checkAvailability() {
    return Boolean('Notification' in window);
  },

  async _requestPermission() {
    const status = await Notification.requestPermission();

    if (status === 'default') {
      console.warn('Permission closed');
    }
    if (status === 'denied') {
      console.error('Notification Denied');
    }
  },

  async _showNotification({
    title,
    options,
  }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(title, options);
  },
};

export default WebsocketNotif;
