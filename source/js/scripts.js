if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

var i=new Image;i.onload=i.onerror=function(){document.body.classList.add(i.height==1?"webp":"no-webp")};i.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";


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

if (window.matchMedia("(max-width: 767px)").matches) {
  var sliderBefore = document.querySelector('.slider__item--before');
  var sliderAfter = document.querySelector('.slider__item--after');
  var buttonBefore = document.querySelector('.slider-toggle__button--before');
  var buttonAfter = document.querySelector('.slider-toggle__button--after');
  var slidersMarker = document.querySelector('.slider-toggle__marker');

  var activeSliderClass = "slider__item--active";
  var toggleSliderClass = "slider-toggle__marker--after";

  if (buttonBefore) {
    buttonBefore.addEventListener('click', function (evt) {
      evt.preventDefault();

      sliderAfter.classList.remove(activeSliderClass);
      sliderBefore.classList.add(activeSliderClass);

      if (slidersMarker.classList.contains(toggleSliderClass)) {
        slidersMarker.classList.remove(toggleSliderClass);
      }
    });
  }


  if (buttonAfter) {
    buttonAfter.addEventListener('click', function (evt) {
      evt.preventDefault();

      sliderBefore.classList.remove(activeSliderClass);
      sliderAfter.classList.add(activeSliderClass);

      if (!slidersMarker.classList.contains(toggleSliderClass)) {
        slidersMarker.classList.add(toggleSliderClass);
      }
    });
  }
}
