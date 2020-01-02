//Función para el botón agregar en "donaciones"
function agregar_donacion() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            formDonacion();
        }
    });
}

//Función para el botón guardar en "donaciones"
function guardar_donacion() {
    var db = firebase.firestore();
    var nombre = document.getElementById('nombre').value;
    var mensaje = document.getElementById('mensaje').value;
    var monto = document.getElementById('monto').value;
    monto = parseInt(monto);
    var detalles = document.getElementById('detalles').value;

    db.collection("donaciones").add({
            nombre: nombre,
            mensaje: mensaje,
            monto: monto,
            detalles: detalles
        })
        .then(
            function(docRef) {
                alert("Se ha guardado correctamente.");
                console.log("Document written with ID: ", docRef.id);
                document.getElementById('nombre').value = "";
                document.getElementById('mensaje').value = "";
                document.getElementById('monto').value = "";
                document.getElementById('detalles').value = "";
            })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}

//Función para el botón cancelar en el formulario donación
function cancelar_donacion() {
    var element = document.getElementById('form');
    var formulario = document.getElementById('formulario-donacion')
    element.removeChild(formulario);
}

//Genera el formulario para la donación
function formDonacion() {
    var formulario = document.getElementById('form');
    //Si no existe el formulario lo genera
    if (!document.getElementById('formulario-donacion')) {
        var elemento = document.createElement("FORM");
        elemento.classList.add("form-group");
        elemento.setAttribute("id", "formulario-donacion");
        elemento.innerHTML = `
                    <input class="form-control" id="nombre" type="text" placeholder="Nombre">
                    <input class="form-control" id="mensaje" type="text" placeholder="Mensaje">
                    <input class="form-control" id="monto" type="number" placeholder="Monto">
                    <input class="form-control" id="detalles" type="text" placeholder="Detalles">
                    <button class="btn btn-linkstart btn-sm" onclick="guardar_donacion();return false;">Guardar</button>
                    <button class="btn btn-linkstart btn-sm" onclick="cancelar_donacion();return false;">Cancelar</button>
                `;
        formulario.appendChild(elemento);
    }
}