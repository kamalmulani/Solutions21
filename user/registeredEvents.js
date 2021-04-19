
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("Successfully logged in!!")
        firebase.firestore().collection("users").doc(user.uid)
        .get().then((doc) => {
            if (doc.exists) {
                document.getElementById("mainContent").style.display = "unset";
                console.log("Document data:", doc.data());
                addProfileData(doc.data());
                addRegisteredEvents(user.uid);
                document.getElementById("LOGOUT").onclick = function() {
                    
                        firebase.auth().signOut().then(function() {
                            console.log("Succesfully logged out");
                            window.location.href = "../login";
                          }).catch(function(error) {
                            console.log(error.message)
                            alert_creator("Error logging out!!")
                          });
                  };
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    } else {
        console.log("Not logged in!!");
        window.location.href = "../login";
    }
 });


 function addProfileData(doc)
 {
    document.getElementById("user-image").src = doc.photoUrl
    document.getElementById("user-name").innerHTML = doc.Username
    document.getElementById("user-email").innerHTML = doc.email
    document.getElementById("user-college").innerHTML = doc.college
 }

 function addRegisteredEvents(uid){

    firebase.firestore().collection("users").doc(uid).collection("registeredEvents")
        .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                document.getElementById("table-content-rows").innerHTML += `
                                                                            <tr>
                                                                            <td>${doc.data().eventName}</td>
                                                                            <td><button type="button" class="button" onclick="location.href='../events/eventRegister/index.html?eventID=${doc.data().eventId}'">
                                                                                    <span class="button__text">Details</span>
                                                                                    </button>
                                                                            </td>
                                                                            </tr>
                                                                            `
        });
    });


 }











