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
        margin:5,
        item:2,
        dots:false,
        responsive:{
          0:{
              items:1
          },
          700:{
            item:1
          }
      }
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
 

//  $("#services").click(function () { 
//   $(".services_grid").toggle
//  });
 $(".services").click(function(){
  $(".services_grid").toggle();
});
$(".mobileMenu,.closeIcon").click(function(){
  $(".sideMenu").toggle();
  $(".menuIcon").toggleClass("fa-bars");
  $(".menuIcon").toggleClass("fa-x");
  // $(".navbar").toggle();
});
$(".toggleService").click(function (e) { 
  $(".servicesTab").toggle();
  $(".navbar").toggle();
  $(".sideMenu").toggle();
});