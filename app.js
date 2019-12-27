console.log("conectado");

firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: "",
});
var db = firebase.firestore();

var nombre = document.getElementById('nombre').value;
var email = document.getElementById('email').value;
var celular = document.getElementById('celular').value;
var comentario = document.getElementById('comentario').value;

function guardarInfo() {

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
