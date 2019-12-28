//se inicializa firebase
var db = firebase.firestore();


var donacionesRef = db.collection("donaciones");

donacionesRef.get().then(
    function(doc) {
        if (doc.exists) {
            console.log("Document data: ", doc.data());
        } else {
            console.log("No such document!");
        }
    }
).catch(function(error) {
    console.log("Error getting document:", error);
});