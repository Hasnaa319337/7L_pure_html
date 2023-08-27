

// Start:: slider Function

var obj = document.getElementsByClassName("slider_container")[0].clientWidth;

function goNext() {
  document.getElementsByClassName("slider_container")[0].scrollBy({
    left: obj,

  });


  document.getElementById('next').classList.remove('show_icon')
  document.getElementById('prev').classList.remove('hide_icon')

  document.getElementById('next').classList.add('hide_icon')
  document.getElementById('prev').classList.add('show_icon')
}

function goPrevious() {
  document.getElementsByClassName("slider_container")[0].scrollBy({
    left: -obj,
  });
  document.getElementById('next').classList.remove('hide_icon')
  document.getElementById('prev').classList.remove('show_icon')

  document.getElementById('next').classList.add('show_icon')
  document.getElementById('prev').classList.add('hide_icon')
}









// End:: Slider Function
