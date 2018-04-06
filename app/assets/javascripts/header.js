document.addEventListener('DOMContentLoaded', function () {

  const mobileMenu = document.querySelector('.navbar-burger');

  mobileMenu.addEventListener('click', function(){
    const menuItems = document.querySelector('.navbar-menu');
    this.classList.toggle('is-active');
    menuItems.classList.toggle('is-active');
  });
});
