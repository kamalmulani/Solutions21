
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







// //Check for login state

// firebase.auth().onAuthStateChanged(function(user) {

//   if (user) {

//       console.log("Successfully logged in!!")

//       document.getElementById("register-button-anchor").onclick = function() {
//         addEventToDatabase(user.uid)
//       };



//   } else {

//     console.log("Not logged in!!")
//     document.getElementById("register-button-anchor").href = "http://127.0.0.1:5501/index.html"


//   }
// });

// // Array storing events

// var eventArray = [
//   "Code Red",
//   "Bug off",
//   "Reverse coding",
//   "only girls coding event"
//  ];

// var eventId = 0;  // Update depending on event
// var chosenEvent = eventArray[eventId];
// var currentDate = new Date();

// var chosenEventId = eventId.toString();

// function addEventToDatabase(uid) {

//   console.log("Writing data to database....")
  

//   db.collection("users").doc(uid).collection("registeredEvents").doc(chosenEventId).set({
//     eventName: chosenEvent,
//     eventId: chosenEventId,
//     timestamp: currentDate
//   })
//   .then(() => {
//       writeDocumentToEvent(uid)

//   })
//   .catch((error) => {
//       console.error("Error adding document: ", error);
//   });

// }


// function writeDocumentToEvent(uid) {


//   db.collection("users").doc(uid)
//     .get().then((doc) => {
//         if (doc.exists) {
//             console.log("Document data:", doc.data());

//             db.collection("allEvents").doc(chosenEventId).collection("registerStatus").doc(uid).set({
//               username: doc.data().Username,
//               college: doc.data().college,
//               email: doc.data().email,
//               timestamp: currentDate
//             })
//             .then(() => {
//                 console.log("Document written with ID: ", uid);
//             })
//             .catch((error) => {
//                 console.error("Error adding document: ", error);
//             });

//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//     }).catch((error) => {
//         console.log("Error getting document:", error);
//     });

// }