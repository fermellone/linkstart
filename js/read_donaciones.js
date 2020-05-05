//se inicializa firebase
var db = firebase.firestore();


//Se crea una variable que va a contener el total de los montos
var total = 0;

//Se extrae los montos del firestore cloud y se suman en la variable "total"

var datos = db.collection("donaciones").get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            total += doc.data()['monto'];
        });
    });

var app = new Vue({
    el: '#app',
    data: {
            acumulado: total
        }
    }
)