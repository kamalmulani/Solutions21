
$(document).ready(function() {
  console.log("lll");
  var name = "aitdata" + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  var cc=true;
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    var b = c.split(',');
    console.log(b);
    if(b[0]==" aitlogged=true"){
      console.log("logged in");
      cc=false;
      var p = document.getElementsByClassName("prof");
      var sss = b[5].split('=')[1];
      p[0].src = sss;
      p[0].style.width = "30px";
      p[0].style.borderRadius = "50%"
      p[0].style.verticalAlign = "middle";
      p[0].style.marginRight = "1em"; 
      p[0].style.width = "2.5em"; 
      p[1].src = sss;
      p[1].style.width = "50px";
      p[1].style.borderRadius = "50%"
      p[1].style.verticalAlign = "middle";

    }
  }
  if(cc){
  var x = document.getElementsByClassName("loginbtn");
  x[0].className += " loginsmallbtn";
  x[1].className += " loginbigbtn";
}

});
   