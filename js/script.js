// Start:: slider Function

var obj = document.getElementsByClassName("slider_container")[0].clientWidth;

function goNext() {
  document.getElementsByClassName("slider_container")[0].scrollBy({
    left: obj,
  });

  document.getElementById("next").classList.remove("show_icon");
  document.getElementById("prev").classList.remove("hide_icon");

  document.getElementById("next").classList.add("hide_icon");
  document.getElementById("prev").classList.add("show_icon");
}

function goPrevious() {
  document.getElementsByClassName("slider_container")[0].scrollBy({
    left: -obj,
  });
  document.getElementById("next").classList.remove("hide_icon");
  document.getElementById("prev").classList.remove("show_icon");

  document.getElementById("next").classList.add("show_icon");
  document.getElementById("prev").classList.add("hide_icon");
}

// End:: Slider Function

// Owlcarousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
});
