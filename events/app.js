
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



function changePannel(evt, pannelName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("pannel");
  console.log(x.length);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("event-cat-but");
  console.log(tablinks.length);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" whiteBG", " ");
  }
  document.getElementById(pannelName).style.display = "grid";
  url = (window.location.href.split('#')[0])+('#'+pannelName);
  window.history.replaceState({}, '', url);
  evt.currentTarget.className += " whiteBG";
}

$(document).ready(function() {
  

   var path = window.location.href;
    path = path.split('#').pop();
    if(path == "coding" || path == "mechanical" || path == "gaming" || path == "entc" || path == "management" || path == "open-events" || path == "rbo" || path == "isdf"){
      document.getElementById(path).style.display = "grid";
      document.getElementById('infoscreen').style.display = "none";
      document.getElementById(path+"btn").className+=" whiteBG";
      
    }

});
