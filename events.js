// Print Existing Events
var db = firebase.firestore();

var eventsRef = db.collection("events");
const events = document.querySelector("#events");

eventsRef.orderBy("timestamp", "asc").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        //Print all events
        events.innerHTML += "<p style='text-align: left;'> <br><span style='font-size: 32px;'>" + doc.data().title + " </span> <br> <img src='./images/pin.svg' style='width: 15px; height: 20px; position: relative; top: 4px;'>" + "<span style='font-family: 'Montserrat', sans-serif; font-weight: 8;'>" + doc.data().location + "</span>" + 
        "&nbsp;&nbsp;&nbsp; <span style='font-size:20px'> <img src='./images/clock.svg' style='width: 15px; height: 20px; position: relative; top: 4px;'> " + doc.data().date + " </span>" + "<span style='font-size:20px'>" + doc.data().time + " </span> <br>" + "<article style='width: 37em'><span >" + doc.data().description + " </article></span> " 
         + "<button type='submit' onclick='document.location=\"" + doc.data().link + "\"'>Register</button> </span><br><br></p> <hr class='beautiful-line'>";
        console.log(doc.id, " => ", doc.data());
    
    });
})
.catch(function(error) {
    console.log("Error getting documents: ", error);
});