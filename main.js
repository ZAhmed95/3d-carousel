var carousel = new Carousel({
  images: [
    "http://via.placeholder.com/400x400",
    "http://via.placeholder.com/400x400",
    "http://via.placeholder.com/400x400",
    "http://via.placeholder.com/400x400",
    "http://via.placeholder.com/400x400",
  ]
});

var left = document.querySelector("#left");
var right = document.querySelector("#right");

left.addEventListener("click", (event)=>{
  if (!carousel.animating){
    carousel.shiftLeft();
  }
});

right.addEventListener("click", (event)=>{
  if (!carousel.animating){
    carousel.shiftRight();
  }
});