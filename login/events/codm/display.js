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
var eventDetails = [
  {
    id: 0,
    title: "Code Red",
    img: "coding.png",
    date: "1 May",
    time: "10:00 AM",
    prizeWorth: "2000Rs" ,
    teamSize: "4",
    descriptionUp: "In a shocking finding, scientist discovered a herd of unicorns living in a remote, previously unexplored valley, in the Andes Mountains. Even more surprising to the researchers was the fact that the unicorns spoke perfect English. Not only that, but the unicornesses are said to act more maturely, and are much more likely to be married than human beings. Some scientists even believe that the unicornesses were actually human ancestors. This incredible find was made by scientist Yayoi Kusuma in 2011.",
    paragraph: "According to the latest research, the wild inhabitants of a remote, previously unexplored valley in the Andes Mountains spoke perfect English. The wild inhabitants of a remote, previously unexplored valley in the Andes Mountains spoke perfect English.",
    descriptionDown: "The findings were made by scientists from Universidad Nacional Autónoma de México (UNAM), in cooperation with other universities and a national park. They came to this conclusion after conducting an initial survey of the area, with the assistance",
  }
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


var eventId = parseInt(chosenEventId);  // integer value to access the index

var mainContent = document.querySelector(".main-content"); 
let displayData = ``; // for storing html content


window.addEventListener("DOMContentLoaded", function () {
    eventDetails.forEach(function (data) {

        if( data.id === eventId) {
          displayData = 
          `
            <div class="three-container">
            <div class="path">
             
            </div>
           <br>
            <div id="event-image">
              <img src=${data.img} style=" position:relative; z-index:2;" alt="placeholder">
            </div>
      
            <br>
            <br>
            <h1 id="title">
            ${data.title}
    
            </h1>
            <div class="TimeAddress">
              <br>
              Date:${data.date}<br>Time: ${data.time}<br>Prize Worth:${data.prizeWorth}<br>Team
              Size: ${data.teamSize}</div>
          </div>
          <br>
          <div class="description">
            <h1>Description</h1>
            ${data.descriptionUp}
      
            <p>${data.paragraph}</p>

            ${data.descriptionDown}
          </div>
          <br>
          <div class="registerForEvent" id="upper" ><a class="line-anim" id="register-button-anchor">Register for event</a></div>
        
            `;}
    });
  
    mainContent.innerHTML = displayData;
  });

