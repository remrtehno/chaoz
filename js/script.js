let yOffset = window.pageYOffset;
let hd = document.getElementsByTagName('header');

window.addEventListener('scroll', function(e) {
  yOffset = window.pageYOffset;
  if (yOffset >= 100) {
	hd[0].classList.add("header_area");
  } else {
  	hd[0].classList.remove("header_area");
  }
  
});

$('.owl-testimontal').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    responsive:{
        320:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:2
        }
    }
})