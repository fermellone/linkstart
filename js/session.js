//Función que se ejecuta cuando se hace clock en el botón login
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
                document.getElementById('pass').value = "";
            } else {
                document.getElementById('user').value = "";
                document.getElementById('pass').value = "";
                alert(errorMessage);
            }
        });
}

//Función que se ejecuta cuando se hace clock en el botón logout
function logout() {
    firebase.auth().signOut().then(function() {
        alert("Se cerró su sesión");
    }).catch(function(error) {
        // An error happened.
    });
}


//Función que se ejecuta cuando no hay sesiones iniciadas
function visitor() {
    console.log('Desconectado')
    var content = document.getElementById('form');
    content.innerHTML = `
        <input class="form-control" id="user" type="email" placeholder="user">
        <input class="form-control" id="pass" type="password" placeholder="pass">
        <button class="btn btn-linkstart" id="btn-login" onclick="login()">Log In</button>
    `;
}

//Función que se ejecuta cuando hay un usuario logeado
function loged() {
    console.log('Conectado');
    var content = document.getElementById('form');
    content.innerHTML = `
    <button class="btn btn-linkstart" id="btn-logout" onclick="logout()">Log Out</button>
    <h4 class="h1 my-4">Agregar Donaciones</h4>
    <button class="btn btn-linkstart" onclick="agregar_donacion()">Agregar donación</button>
    `;
}

//Función que controla si hay sesiones activas
function observador() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            loged();
        } else {
            visitor();
        }
    });
}

observador();