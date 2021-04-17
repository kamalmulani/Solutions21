
//Check for login state
firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
    var sss;
      console.log("Successfully logged in!!")
      var user = firebase.auth().currentUser;
      db.collection("users").doc(user.uid)
      .get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data())
              sss = doc.data().photoUrl; 
              var p = document.getElementsByClassName("prof");
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
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });

      



  } else {

    console.log("Not logged in!!")
    var x = document.getElementsByClassName("loginbtn");
    x[0].className += " loginsmallbtn";
    x[1].className += " loginbigbtn";


  }
});

