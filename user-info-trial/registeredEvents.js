
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("Successfully logged in!!")
        firebase.firestore().collection("users").doc(user.uid)
        .get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                addProfileData(doc.data())
                addRegisteredEvents(user.uid)
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    } else {
        console.log("Not logged in!!")
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
                                                                            <td>${doc.data().timestamp}</td>
                                                                            <td><button type="button" class="button >
                                                                                    <span class="button__text">Details</span>
                                                                                    </button>
                                                                            </td>
                                                                            </tr>
                                                                            `
        });
    });


 }











