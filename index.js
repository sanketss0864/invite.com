$(document).ready(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classlist.remove("show");
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  $("#owl-carousel2").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    items: 1,
    autoplay: true,
  });
  $("#owl-carousel4").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    items: 1,
  });
  $("#owl-carousel1").owlCarousel({
    loop: true,
    nav: true,
    margin: 5,
    item: 2,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  $("#owl-carousel3").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    margin: 5,
    dots: false,
    //       mouseDrag: false,
    // touchDrag: false,
  });
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

$("#services").click(function () {
  $(".services_grid").toggle();
});
$(".mobileMenu,.closeIcon").click(function () {
  $(".sideMenu").toggle();
  $(".menuIcon").toggleClass("fa-bars");
  $(".menuIcon").toggleClass("fa-x");
});

$(".toggleService").click(function (e) {
  $(".servicesTab").toggle();
  $(".navbar").toggle();
  $(".sideMenu").toggle();
});
$(".accordionHeading").click(function () {
  $(this).next().toggle();
  $(this).children(".fa-solid").toggleClass("fa-plus");
  $(this).children(".fa-solid").toggleClass("fa-minus");
});
var slider = document.getElementById("myRange");
var output = document.getElementById("svalue");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = "₹" + this.value;
};
// custno=document.querySelector("#custNo input");
custmail = document.querySelector("#custMail");
// custdate=document.querySelector("#custDate input");

emailregex = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
custmail.oninput = function () {
  console.log(custmail.value);
  mailval = custmail.value.trim();
  if (emailregex.test(mailval)) {
    // custmail.classList.remove("invalid");
    custmail.classList.remove("wrongval");
    custmail.previousElementSibling.innerHTML = "Email" + "<sup>*</sup>";
  } else if (mailval == "") {
    custmail.previousElementSibling.innerHTML =
      "Email" + '<span class="errormsg">(input is empty)</span>';
    // custmail.classList.add("invalid");
    custmail.classList.add("wrongval");
  } else {
    // console.log("working")
    // custmail.classList.add("invalid");
    custmail.classList.add("wrongval");
    custmail.previousElementSibling.innerHTML =
      "Email" + '<span class="errormsg">(Enter a valid Email address)</span>';
  }
};
lenvalidate = document.querySelectorAll(".lengthvalidate");

for (i = 0; i < lenvalidate.length; i++) {
  // console.log("working")
  lenvalidate[i].oninput = function (evt) {
    // console.log("working")
    ele = evt.target;
    ele.style = "";
    if (ele.value.trim().length > 3 && ele.value.length <= 25) {
      // console.log("working")
      // ele.style.outlineColor="#eb5656";
      // ele.style.border="solid #eb5656";
      // ele.classList.remove("invalid");
      ele.classList.remove("wrongval");
      ele.previousElementSibling.innerHTML =
        ele.previousElementSibling.getAttribute("value") + "<sup >*</sup>";
    } else if (ele.value.trim() == "") {
      ele.previousElementSibling.innerHTML =
        ele.previousElementSibling.getAttribute("value") +
        '<span class="errormsg">(input is empty)</span>';
      // ele.classList.add("invalid");
      ele.classList.add("wrongval");
    } else {
      // ele.classList.add("invalid");
      ele.classList.add("wrongval");
      ele.previousElementSibling.innerHTML =
        ele.previousElementSibling.getAttribute("value") +
        '<span class="errormsg">(input should be between 3-25 letters)</span>';
    }
  };
}

storeformdata = [];
formdataob = {};
// formbtn=document.querySelector(".form-button")
// formbtn.addEventListener("click",showmessageform())
function showmessageform() {
  // console.log("working")
  forminput = document.querySelectorAll(".form-in");
  // datakey=forminput[i].getAttribute("val")
  // formdataob.datakey=forminput[i].value;
  i = 0;
  formdataob = {
    name: forminput[i].value.trim(),
    email: forminput[i + 1].value.trim(),
    subject: forminput[i + 2].value.trim(),
    enquiry: forminput[i + 3].value.trim(),
  };
  lenvalidate = document.querySelectorAll(".lengthvalidate");
  for (i = 0; i < forminput.length; i++) {
    if (
      forminput[i].classList.contains("invalid")&&forminput[i].value=="" ||
      forminput[i + 1].classList.contains("invalid")&&forminput[i+1].value=="" ||
      forminput[i + 2].classList.contains("invalid")&&forminput[i+2].value=="" ||
      forminput[i + 3].classList.contains("invalid")&&forminput[i+3].value==""
    ) {
      for (j = 0; j < forminput.length; j++) {
        if (
          forminput[j].previousElementSibling.getAttribute("value") == "Email"
        ) {
          forminput[j].previousElementSibling.innerHTML =
            forminput[j].previousElementSibling.getAttribute("value") +
            '<span class="errormsg">( Please enter a valid Email)</span>';
        } else if (forminput[j].previousElementSibling.innerHTML == "Subject") {
          forminput[j].previousElementSibling.innerHTML =
            forminput[j].previousElementSibling.getAttribute("value") +
            '<span class="errormsg">(' +
            forminput[j].previousElementSibling.getAttribute("value") +
            " can not be empty.)</span>";
        } else if (forminput[j].previousElementSibling.innerHTML == "Query") {
          forminput[j].previousElementSibling.innerHTML =
            forminput[j].previousElementSibling.getAttribute("value") +
            '<span class="errormsg">(' +
            forminput[j].previousElementSibling.getAttribute("value") +
            " can not be empty.)</span>";
        } else {
          forminput[j].previousElementSibling.innerHTML =
            forminput[j].previousElementSibling.getAttribute("value") +
            '<span class="errormsg">(' +
            forminput[j].previousElementSibling.getAttribute("value") +
            " must be between 3 and 25 characters.)</span>";
        }
        forminput[j].classList.add("wrongval");
      }
      emptyform()
      Swal.fire({
        title: "query status",
        text: "Your email has not been sent successfully. please try again",
        icon: "error"
      });
      break;
      // alert("invalid")
    } else {
      forminput[i].classList.remove("wrongval");
      // alert(JSON.stringify(formdataob));
  try{
    postData(
      "https://uatapi.tingtingu.com/api/user/sendMail",
      formdataob
    ).then((data) => {
      console.log(data.statusCode); // JSON data parsed by `data.json()` call
      if (data.statusCode===200) {
        emptyform();
        Swal.fire({
          title: "query status",
          text: "Your email has been sent successfully. We'll be in touch shortly. Thank you!",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "query status",
          text: "Your email has not been sent successfully. please try again",
          icon: "error"
        });
      }
    });
  }
  catch(e){
    console.log(e);
  }

      //       fetch("https://uatapi.tingtingu.com/api/user/sendMail", {
      //   method: "POST",
      //   body: JSON.stringify(formdataob),
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8"
      //   }
      // });
    }
  }
  // storeformdata.push(formdataob);
  // console.log(JSON.stringify(formdataob))
  // alert(JSON.stringify(formdataob))
}
// let logs

async function postData(url = "", data) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data), 
  });
  return response.json(); 
}
//  logs=response.json()
//   console.log(logs);
function emptyform(){
  forminput = document.querySelectorAll(".form-in");
  i=0
           forminput[i].value=null
           forminput[i + 1].value=null
           forminput[i + 2].value=null
           forminput[i + 3].value=null
 }