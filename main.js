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



let specials = document.getElementById("specials");
let menu= document.getElementById("menu");
let menuItem1=document.getElementById("menu-item1");
let menuItem2=document.getElementById("menu-item2");
let menuItem3=document.getElementById("menu-item3");
let foodMenu = document.getElementById("food-menu");
let contact= document.getElementById("social");
let navcheck = document.getElementById("navcheck");






menuItem1.addEventListener("click" ,function(){
  foodMenu.scrollIntoView({behavior: "smooth"});
  navcheck.checked = false;
});
menuItem2.addEventListener("click" ,function(){
  specials.scrollIntoView({behavior: "smooth"});
  navcheck.checked = false;
});
menuItem3.addEventListener("click" ,function(){
  contact.scrollIntoView({behavior: "smooth"});
  navcheck.checked = false;
});


/*
element.scrollIntoView({behavior: "smooth"});

*/

