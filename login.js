
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

function logout() {
  firebase.auth().signOut().then(function() {
    console.log("Sign-out successful.");
    location.reload();
  }).catch(function(error) {
    // An error happened.
  });
  
}

function observador() {
  document.getElementById('user').value = "";
  document.getElementById('pass').value ="";
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("Conectado");
      var btn = document.createElement("BUTTON");
      btn.innerHTML = "Log Out";
      btn.id = "btn-logout";
      btn.setAttribute("onclick","logout()");
      document.getElementById("loginContainer").removeChild(document.getElementById("form"));
      document.getElementById("loginContainer").appendChild(btn);
      // document.getElementById("btn-logout").style.display = "block";
      // document.getElementById("btn-logout").style.margin = "1rem auto";
    }
    else {
      console.log("Desconectado");
      document.getElementById("form").style.display = "block";
      // var btnin = document.createElement("BUTTON");
      // btnin.innerHTML = "Log In";
      // btnin.id = "btn-login";
      // btnin.setAttribute("onclick","login()");
      // document.getElementById("btn-login").appendChild(btnin);
    }
  });
}

observador();