firebase.initializeApp({
  
});
var db = firebase.firestore();

function toggle_cancelar() {
  var toggle = document.getElementById('formContainer');
  toggle.style.display = 'none';
}

function crear_donacion() {
  var nombre = document.getElementById('nombre').value;
  var mensaje = document.getElementById('mensaje').value;
  var monto = document.getElementById('monto').value;
  var detalles = document.getElementById('detalles').value;

  db.collection("donaciones").add({
          nombre: nombre,
          mensaje: mensaje,
          monto: monto,
          detalles: detalles
      })
      .then(
          function(docRef) {
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

function agregar_donacion() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var content = document.getElementById('formContainer');
      if (content.style.display === 'none') {
        content.style.display = 'block';
      }
      else {
        content.innerHTML = `
          <input id="nombre" type="text" placeholder="Nombre">
          <input id="mensaje" type="text" placeholder="Mensaje">
          <input id="monto" type="number" placeholder="Monto">
          <input id="detalles" type="text" placeholder="Detalles">
          <button class="btn btn-linkstart" onclick="crear_donacion()">Guardar</button>
          <button class="btn btn-linkstart" onclick="toggle_cancelar()">Cancelar</button>
        `;
      }
    }
    else {
      var content = document.getElementById('formContainer');
      content.innerHTML = `
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <link rel="stylesheet" href="../css/styles.css">
      <div id="form">
        <input id="user" type="email" placeholder="user">
        <input id="pass" type="password" placeholder="pass">
        <button class="btn btn-linkstart" id="btn-login" onclick="login()">Log In</button>
      </div>
      `;
    }
  });
}
