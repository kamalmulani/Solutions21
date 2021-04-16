
          var regusername = document.getElementById("username");
          var regemailinput = document.getElementById("regemail");
          var regcoll = document.getElementById("regcoll")
          var regpasswordinput = document.getElementById("regpassword");
  
          var loginemail = document.getElementById("loginemail");
          var loginpassword = document.getElementById("loginpassword");

          var emailResetPassword = document.getElementById("emailResetPassword")
          var confirmEmailResetPassword = document.getElementById("confirmEmailResetPassword")


          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("Successfully logged in!!")
            } else {
            console.log("Not logged in!!")
            }
          });

  
          function registeration(){
              var name = regusername.value; 
              var email = regemailinput.value;
              var college = regcoll.value;
              var password = regpasswordinput.value;
              
              if(name!="" && email!="" && college!="" && password!=""){
  
                  firebase.auth().createUserWithEmailAndPassword(email, password)
                  .then(function(user) {
                        var user = firebase.auth().currentUser;
                        user.sendEmailVerification().then(function() {
                        console.log("Email Sent Succesfully!!!");
                        alert_creator("Verification Link sent!! Check your email");
                        var uid = user.uid;
                        saveuserdata(uid,name,email, college);
                        }, function(error) {
                        console.log(error);
                        alert(error);
                        });
                    }, function(error) {
                            // Handle Errors here.
                            var errorMessage = error.message;
                            alert_creator(errorMessage)
                            console.log(errorMessage);
                    });
              }
              else{
                  alert_creator("Please Fill out all Fields!!")
              }
            }
          
  
        function  logout(){
            firebase.auth().signOut().then(function() {
                console.log("Succesfully logged out")
              }).catch(function(error) {
                console.log(error.message)
                alert_creator("Error logging out!!")
              });
              deleteCookie();
        }
  

        function saveuserdata(uid,name,email,college, photoUrl){
          console.log("Saveuserdata starts")
          db.collection("users").doc(uid).set({
              Username: name, 
              email: email,
              college: college,
              photoUrl: photoUrl
          })
          .then(function(uid) {
              console.log("Document written with ID: ", uid);
              logout();
          })
          .catch(function(error) {
              console.error("Error adding document: ", error);
          });
  
        }
  
  
          function login(){
            var email = loginemail.value;
            var password = loginpassword.value;
            if(email!="" && password!=""){
                firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user)=>{
                console.log("Logged in successfuly!!")
                checkemailisverified();
              })
                .catch(function(error) {
                console.log(error)
                alert_creator(error.message)
                });
            }
            else{
                alert_creator("Please fill out all the fields!!");
            }
          }
  
          function checkemailisverified(){
            var user = firebase.auth().currentUser;
            if(user.emailVerified){
              alert_creator("Logged in Successfull")
              db.collection("users").doc(user.uid)
      .get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data())
              WriteCookie(user.uid,doc.data().Username,doc.data().email,doc.data().college,"https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg");

          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
            }else{
              alert_creator("Please Verify your email!!")
              user.sendEmailVerification()
              logout();
            }
          }

          function sendResetMail(){

            if(emailResetPassword.value != confirmEmailResetPassword.value)
            {
                alert_creator("Check your email again!!")
            }
            else{

                var auth = firebase.auth();
                var emailAddress = emailResetPassword.value;
                
                auth.sendPasswordResetEmail(emailAddress).then(function() {
                    alert_creator("Verification Link Sent")
                }).catch(function(error) {
                    alert_creator(error.message)
                });
            }   
            
          }



          // Login with Google //

          function signInWithGoogle() {



            //Modal Show -----------------



            console.log("Sign in with google started....")

            var provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth()
              .signInWithPopup(provider)
              .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;

                console.log("Google sign in log - " + user.uid )
                console.log("Google sign in log - " + user.displayName )
                console.log("Google sign in log - " + user.email )
                console.log("Google sign in log - " + user.photoURL)
                saveuserdata(user.uid, user.displayName ,user.email ,"Used Google Account", user.photoURL)
                WriteCookie(user.uid, user.displayName ,user.email ,"Used Google Account", user.photoURL)
                
              }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                alert_creator(errorMessage)
              });

          }








          function alert_creator(msg){
            data = '<div class="alert alert-warning alert-dismissible fade show" role="alert" > ' +
                   msg + 
                  '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> \
                    <span aria-hidden="true">&times;</span> \
                  </button> \
                </div>'
            $("#alert_container").html(data);
        }


        function WriteCookie(uid,name,email,college,imgurl) {
          
          document.cookie ="aitlogged=true,"+"aituid="+uid+",aitname="+name+",aitemail="+email+",aitcollege="+college+",aitiu="+imgurl+";path=/";
          console.log(getCookie("aitlogged"));

        }

        function getCookie(cname) {
          var name = cname + "=";
          var decodedCookie = decodeURIComponent(document.cookie);
          var ca = decodedCookie.split(';');
          for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
            }
          }
          return "";
        };

        function deleteCookie(){
          document.cookie = "aitlogged=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
  