
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`; 
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************

const navbar = document.querySelector("#nav");
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;

  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});


function changePannel(evt, pannelName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("pannel");
  console.log(x.length);
  for (i =0 ; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("event-cat-but");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" whiteBG", " ");
  }
  document.getElementById(pannelName).style.display = "grid";
  evt.currentTarget.className += " whiteBG";
}
