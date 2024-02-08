var modal=$(".modal");
//drop-down menu on full width
var destinationLink=$("#destination-link");
var destinationMenu=$("#destination-menu");
destinationLink.mouseenter(function () {
  destinationMenu.css({"opacity":1,
                      "z-index":10})
}).mouseleave(function () {
  destinationMenu.css({"opacity":0,
                      "z-index":-2})
})

destinationMenu.mouseenter(function () {
  destinationMenu.css({"opacity":1,
                      "z-index":10})
}).mouseleave(function () {
  destinationMenu.css({"opacity":0,
                      "z-index":-2})
})
// mobile navigation toggle
var headerMenu=$(".header-menu");
var headerMenuSocial=$(".header-menu--social");
var hamburger=$(".hamburger");
var mobileNav=$(".mobile-nav")
var mobileClose=$(".mobile-nav__close");
hamburger.click(function () {
  modal.fadeToggle();
  mobileNav.css({"opacity":1,
                  "right":0})
});
mobileClose.click(function () {
  modal.fadeToggle();
  mobileNav.css({"opacity":0,
                  "right":"-100%"})
});
$(window).resize(function () {
  slideContainer.css({"margin-left":"0px"});
  slideWidth=$(slides[0]).width();
  console.log($(slides[0]).width())
  if (window.innerWidth> 1000) {
    modal.css({"display":"none"});
    mobileNav.css({"opacity":1})
  }
})
//slider

var sliders=$(".slider");
var slideContainer=sliders.find(".slider__container");
var slides=slideContainer.find(".slider__slide");
var slideCount=3;
var slideWidth=$(slides[0]).width();
var hover=false;
var rightArrow=sliders.find(".slider__right");
var leftArrow=sliders.find(".slider__left");

slideContainer.on("mouseenter",function () {
  hover=true;
})
slideContainer.on("mouseleave",function () {
  hover=false;
})
rightArrow.click(function () {
  slideAnimate();
})
leftArrow.click(function () {
  console.log(slideContainer.css("margin-left"))
    console.log(-slideWidth+"px")
  if (slideContainer.css("margin-left")!=0+"px") {
    slideContainer.animate({"margin-left":"+="+slideWidth+"px"})
  }else{
    slideContainer.css({"margin-left":-slideWidth*(slideCount-1)+"px"});
  }
})
function slideAnimate() {
  if (!hover) {
    if (slideContainer.css("margin-left")==slideWidth*-1+"px"||slideContainer.css("margin-left")===0+"px") {
      slideContainer.animate({"margin-left":"-="+slideWidth+"px"})
    }else{
      slideContainer.css({"margin-left":"0px"});
    }
  }
//  console.log(slideContainer.css("margin-left"))
}

setInterval(slideAnimate,2000)

//Modal screen

var modalScreen=$(".modal-screen");
var modalOpen=$(".modal-open");
var modalVideo=$(".modal-video");
modalScreen.fadeToggle();
modalOpen.click(function(){
  modalScreen.fadeToggle();
})

modalVideo.click(function () {
  modalScreen.fadeToggle();
})
