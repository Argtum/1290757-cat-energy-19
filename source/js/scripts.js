var navMain = document.querySelector('.main-nav');
var menuToggle = document.querySelector('.menu-toggle');

navMain.classList.remove('main-nav--no-js');
menuToggle.classList.remove('menu-toggle--opened');

menuToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
    menuToggle.classList.remove('menu-toggle--opened');
  } else {
    navMain.classList.add('main-nav--opened');
    menuToggle.classList.add('menu-toggle--opened');
  }
});


