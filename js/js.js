

// Start:: slider Function

var obj = document.getElementsByClassName("slider_container")[0].clientWidth;

function goNext() {
  document.getElementsByClassName("slider_container")[0].scrollBy({
    left: obj,
  });
}

function goPrevious() {
  document.getElementsByClassName("slider_container")[0].scrollBy({
    left: -obj,
  });
}

// End:: Slider Function
