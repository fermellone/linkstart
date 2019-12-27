
//Agregar la configuración de firebase acá

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
    } else {
      alert(errorMessage);
    }
  });
}

function observador() {
  document.getElementById('user').value = "";
  document.getElementById('pass').value ="";
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("Conectado");
    }
    else {
      console.log("Desconectado")
    }
  });
}

observador();