


/* menu scroll function */

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

