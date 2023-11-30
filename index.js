$(document).ready(function(){
    $('#owl-carousel2').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        center: true,
        items:1,
    })
    $('#owl-carousel1').owlCarousel({
        loop:true,
        nav:false,
        items:3,
        margin:5,
        dots:true,
    })
  });
  
  function menuToggle(){
    const side=document.querySelector(".sideMenu")
    const back=document.querySelector(".backdrop")
    side.classList.toggle("active")
    back.classList.toggle("active")
  }