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


  "SCINTILLA-IGNITING MINDS",  // 19
  "ABHIKALPNA :BUDDY LOVE THE WAY YOU DESIGN", // 20
  "QUIZOTICS", // 21
  


  "Innovation Challenge: A Day in a Startup", // 22
  "Startup Challenge: A Day in a Startup", // 23


  "ByPass CTF", // 24

  "TROUBLESHOOTING THE ENCLOSURE", // 25
  "TECHSTORM", // 26
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


function alert_creator(msg){
  data = '<div class="alert alert-warning alert-dismissible " role="alert" > ' +
         msg + 
        '<button type="button" class="close" data-dismiss="alert" aria-label="Close" id="cls-alrt"> \
          <span aria-hidden="true">&times;</span> \
        </button> \
      </div>'
  $("#alert_container").html(data);
  document.getElementById("cls-alrt").onclick = function(){
    $("#alert_container").html("");
  }
}

//Check for login state
firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
  
        console.log("Successfully logged in!!")
  
        document.getElementById("register-button-anchor").onclick = function() {
          addEventToDatabase(user.uid)
        };
  
  
  
    } else {
  
      console.log("Not logged in!!");
      document.getElementById("register-button-anchor").href = "../../login/"
  
  
    }
  });
  
  function addEventToDatabase(uid) {
  
    console.log("Writing data to database....")
    
  
    db.collection("users").doc(uid).collection("registeredEvents").doc(chosenEventId).set({
      eventName: chosenEvent,
      eventId: eventId,
      eventIdString: chosenEventId,
      timestamp: currentDate
    })
    .then(() => {
        writeDocumentToEvent(uid)
  
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert_creator("OYE! You have Already Regestered for this event");
        
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
                eventId: eventId,
                eventIdString: chosenEventId,
                timestamp: currentDate
              })
              .then(() => {
                  console.log("Document written with ID: ", uid);
                  alert_creator("Successfully Regestered for the event.");
                  if(eventId == 10){
                    window.open('https://forms.gle/sQLLLpwSQSK8uGNM9', '_blank');
                  }
              })
              .catch((error) => {
                  console.error("Error adding document: ", error);
                  alert_creator("Regestration Unsuccessful. Check if your are already regestered for this event or contact the organizers");
              });
  
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
          alert_creator("Regestration Unsuccessful. Check if your are already regestered for this event or contact the organizers");
      });
  
  }