var eventArray = [
    "Code Red", // 0
    "Bug off", // 1
    "Reverse coding", // 2
    "only girls coding event", // 3

    
    "NAND IT", // 4
    "IMPEDENCE", // 5


    "Catia" , // 6
    "AutoCAD", // 7

 
    "CODM (BR & MP)", // 8
    "Valorant", // 9
    "clash royal", // 10
    "Free fire", // 11


    "Tech matrix", // 12
    "Sudoku tech", // 13
    "placement APTI", // 14
    "Rubix Cube", // 15
    "photoshop event for poster", // 16
    "Ad making" , // 17
    "photography", // 18


    "Robotics club event 1",  // 19
    "Robotics club event 2", // 20
    "Robotics club event 3", // 21

 
    "E -cell event 1", // 22
    "E -cell event 2", // 23


    "ISDF event 1", // 24
   ];


//getting course params 
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function(m,key,value) {
        vars[key] = value;     
    });
    return vars;   
}
var chosenEventId = getUrlVars()["eventID"];


// Storing details 
var eventId = parseInt(chosenEventId);  
var chosenEvent = eventArray[eventId];
var currentDate = new Date();



//Check for login state
firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
  
        console.log("Successfully logged in!!")
  
        document.getElementById("register-button-anchor").onclick = function() {
          addEventToDatabase(user.uid)
        };
  
  
  
    } else {
  
      console.log("Not logged in!!")
      document.getElementById("register-button-anchor").href = "http://127.0.0.1:5501/index.html"
  
  
    }
  });
  
  function addEventToDatabase(uid) {
  
    console.log("Writing data to database....")
    
  
    db.collection("users").doc(uid).collection("registeredEvents").doc(chosenEventId).set({
      eventName: chosenEvent,
      eventId: chosenEventId,
      timestamp: currentDate
    })
    .then(() => {
        writeDocumentToEvent(uid)
  
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  
  }
  
  
  function writeDocumentToEvent(uid) {
  
  
    db.collection("users").doc(uid)
      .get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
  
              db.collection("allEvents").doc(chosenEventId).collection("registerStatus").doc(uid).set({
                username: doc.data().Username,
                college: doc.data().college,
                email: doc.data().email,
                timestamp: currentDate
              })
              .then(() => {
                  console.log("Document written with ID: ", uid);
              })
              .catch((error) => {
                  console.error("Error adding document: ", error);
              });
  
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
  
  }