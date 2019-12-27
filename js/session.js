
//Agregar la configuración de firebase acá
var firebaseConfig = {
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login() {
  var email = document.getElementById('user').value;
  var password = document.getElementById('pass').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
      document.getElementById('pass').value ="";
    } else {
      document.getElementById('user').value = "";
      document.getElementById('pass').value ="";
      alert(errorMessage);
    }
  });
}

function logout() {
  firebase.auth().signOut().then(function() {
    alert("Se cerró su sesión");
  }).catch(function(error) {
    // An error happened.
  });
  
}

function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("Conectado");
      var content = document.getElementById('logContainer');
      // content.innerHTML = `
      // <div id="form">
      //   <button class="btn btn-linkstart" id="btn-logout" onclick="logout()">Log Out</button>
      // </div>
      // <div include-html="../templates/agregar_donaciones.html"></div>
      // <script src="../js/includeHtml.js"></script>
      // `;
      window.location.replace("http://localhost:5500/templates/agregar_donaciones.html");
    }
    else {
      console.log("Desconectado");
      var content = document.getElementById('logContainer');
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

observador();