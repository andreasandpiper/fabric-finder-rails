document.addEventListener('DOMContentLoaded', function () {

  var mobileMenu = document.querySelector('.navbar-burger');

  mobileMenu.addEventListener('click', function(){
    var menuItems = document.querySelector('.navbar-menu');
    this.classList.toggle('is-active');
    menuItems.classList.toggle('is-active');
  });
});
