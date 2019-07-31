window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var headerPadding = document.getElementById("headerPadding");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    headerPadding.style.display = "block"
  } else {
    header.classList.remove("sticky");
    headerPadding.style.display = "none"

  }
}