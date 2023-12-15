const DrawerInitiator = {
  init({
    button,
    drawer,
    content,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },
  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('navbar-list-block');
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('navbar-list-block');
  },

};

export default DrawerInitiator;
