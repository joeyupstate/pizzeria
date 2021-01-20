function simpleSlider() {

  var options = arguments[0] || {};
  var sliderSelector = options.selector || '.js-simple-slider';
  var sliderHiddenClass = options.classHidden || 'is-hidden';
  var sliderInterval = options.interval || 6000;

  var slider = document.querySelector(sliderSelector);
  var slidesCount = slider.children.length;
  var i = 0;

  setInterval(function(){
    slider.children[i].classList.add(sliderHiddenClass);
    i++;
    if(i >= slider.children.length) {i = 0;}
    slider.children[i].classList.remove(sliderHiddenClass);
  }, sliderInterval);

};

simpleSlider();