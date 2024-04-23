import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'

const firebaseConfig = {
    apiKey: "AIzaSyCGYNRj5qyJZ03BfQJ6DM8kpmWz5Y9uX94",
    authDomain: "apiweb2024alejo.firebaseapp.com",
    projectId: "apiweb2024alejo",
    storageBucket: "apiweb2024alejo.appspot.com",
    messagingSenderId: "633367156898",
    appId: "1:633367156898:web:55923ecede540b9188dffb",
    measurementId: "G-6PF1Y0YC4S"
  };

import { 
    getAuth,
    signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const formularioLogin = document.querySelector('#loginbtn');

formularioLogin.addEventListener("click", async (evento) => {
    evento.preventDefault(); 

    const email = document.getElementById('edtuser').value;
    const contraseña = document.getElementById('edtpassword').value;

    try {
        const credenciales = await signInWithEmailAndPassword(auth, email, contraseña);
        console.log(credenciales);

        const modal = new bootstrap.Modal(document.querySelector('#signinModal'));
        modal.hide();
        
        alert('Autenticación exitosa: ' + credenciales.user.email);
        window.location.href = '../Templates/home.html';
        
    } catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        switch(errorCode) {
            case "auth/invalid-email":
                alert('El correo electrónico no es válido.');
                break;
            case "auth/user-disabled":
                alert('El usuario ha sido deshabilitado.');
                break;
            case "auth/user-not-found":
                alert('No se encontró ningún usuario con este correo electrónico.');
                break;
            case "auth/missing-password":
                alert('No hay ninguna contrseña');
                break;
            case "auth/invalid-credential":
                alert('Contraseña incorrecta.');
                break;
            default:
                alert(errorMessage);
        }
    }
});

atrasbtn.addEventListener('click', (e) => {
    auth.signOut().then(() => {
        alert('Sesión cerrada');
    }).catch((error) =>{+
        alert('Error al cerrar sesión');
    });
})

