// Print Existing Events
var db = firebase.firestore();

var eventsRef = db.collection("events");
const events = document.querySelector("#events");

eventsRef.orderBy("timestamp", "asc").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        //Print all events
        events.innerHTML += "<div class=\"row flex-md-row\"><div class=\"col events-card\"><h2>"+ doc.data().title +"</h2><div class=\"row flex-lg-row\"><div class=\"col-auto\"><div><span><i class=\"fa fa-map-marker\"></i> "+ doc.data().location +"</span></div></div><div class=\"col-auto\"><div><span><i class=\"fa fa-clock-o\"></i> " + doc.data().date + "| " + doc.data().time +"</span></div></div></div><p class=\"event-card-description\">" + doc.data().description + "</p><div><a class=\"btn btn-primary justify-content-lg-center event-card-btn\" role=\"button\" onclick='document.location=\"" + doc.data().link + "\"'>Register</a></div></div><div class=\"col-auto img-col events-card\"><img src=\"assets/img/magnifyXcommunity.png\" /></div></div> <div class=\"row flex-md-row\"><div class=\"col\"><hr></div></div>";
        console.log(doc.id, " => ", doc.data());
    
    });
})
.catch(function(error) {
    console.log("Error getting documents: ", error);
});