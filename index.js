$(document).ready(function(){
    $('#owl-carousel2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        center: true,
        items:1,
    })
    $('#owl-carousel4').owlCarousel({
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
        responsive: {
          0:{
            items:1,
            nav: false
          },
          600:{
            items:2,
            nav: false
          },
          1000:{
            items:2,
            nav: false
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
// $(document).ready(function(){
//   $(".services").click(function(){
//     $(".services_grid").toggle();
//   });
//   $(".mobileMenu,.closeIcon").click(function(){
//     console.log("working..")
//     // $(".sideMenu").toggleClass("active");
//     $(".sideMenu").toggle();
//     $(".menuIcon").toggleClass("fa-bars");
//     $(".menuIcon").toggleClass("fa-x");
//   });
//   $(".toggleService").click(function (e) { 
//     $(".servicesTab").toggle();
//     $(".navbar").toggle();
//     $(".sideMenu").toggle();
//   });
//   $(".accordionHeading").click(function(){
//     $(this).next().toggle();
//     $(this).children(".fa-solid").toggleClass("fa-plus");  
//     $(this).children(".fa-solid").toggleClass("fa-minus");
    
//   });
// });

 $(".services").click(function(){
  $(".services_grid").toggle();
});
$(".mobileMenu,.closeIcon").click(function(){
  $(".sideMenu").toggle();
  $(".menuIcon").toggleClass("fa-bars");
  $(".menuIcon").toggleClass("fa-x");
});

$(".toggleService").click(function (e) { 
  $(".servicesTab").toggle();
  $(".navbar").toggle();
  $(".sideMenu").toggle();
});
$(".accordionHeading").click(function(){
  $(this).next().toggle();
  $(this).children(".fa-solid").toggleClass("fa-plus");  
  $(this).children(".fa-solid").toggleClass("fa-minus");
  
});
