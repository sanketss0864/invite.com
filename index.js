$(document).ready(function(){
    $('#owl-carousel2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        center: true,
        items:1,
    })
    $('#owl-carousel1').owlCarousel({
        loop:true,
        nav:true,
        items:2,
        margin:5,
        dots:false,
    })
    $('#owl-carousel3').owlCarousel({
      loop:true,
      nav:true,
      items:1,
      margin:5,
      dots:false,
  //       mouseDrag: false,
  // touchDrag: false,
  })
  });
  
  function menuToggle(){
    const side=document.querySelector(".sideMenu")
    const back=document.querySelector(".backdrop")
    side.classList.toggle("active")
    back.classList.toggle("active")
  }
 
