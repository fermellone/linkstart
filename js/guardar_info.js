// firebase.initializeApp({
//     apiKey: "AIzaSyB5lRiA2zsT55k14mB95eyGQZDAAB_WmqE",
//     authDomain: "linkstart-1.firebaseapp.com",
//     projectId: "linkstart-1",
// });
var db = firebase.firestore();


function guardarInfo() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;
    var comentario = document.getElementById('comentario').value;

    db.collection("personas").add({
            nombre: nombre,
            email: email,
            celular: celular,
            comentario: comentario
        })
        .then(
            function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                document.getElementById('nombre').value = "";
                document.getElementById('email').value = "";
                document.getElementById('celular').value = "";
                document.getElementById('comentario').value = "";
            })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}
