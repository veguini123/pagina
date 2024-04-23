import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'

import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification
  } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'

  const firebaseConfig = {
    apiKey: "AIzaSyCGYNRj5qyJZ03BfQJ6DM8kpmWz5Y9uX94",
    authDomain: "apiweb2024alejo.firebaseapp.com",
    projectId: "apiweb2024alejo",
    storageBucket: "apiweb2024alejo.appspot.com",
    messagingSenderId: "633367156898",
    appId: "1:633367156898:web:55923ecede540b9188dffb",
    measurementId: "G-6PF1Y0YC4S"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function validarContraseña(contraseña) {
    const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return regexContraseña.test(contraseña);
}

registro.addEventListener("click", (e) => {
    var email = document.getElementById('emailreg').value;
    var contraseña = document.getElementById('passwordreg').value;

    
    if (!validarContraseña(contraseña)) {
        alert('La contraseña debe tener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula y un carácter especial.');
        return; 
    }

   
    createUserWithEmailAndPassword(auth, email, contraseña).then(cred => {
        alert("Usuario creado");
        sendEmailVerification(auth.currentUser).then(() => {
            alert('Se ha enviado un correo de verificación');
        });

    }).catch(error => {
        const errorCode = error.code;

        if (errorCode == 'auth/email-already-in-use')
            alert('El correo ya está en uso');
        else if (errorCode == 'auth/invalid-email')
            alert('El correo no es válido');
        else if (errorCode == 'auth/weak-password')
            alert('La contraseña debe tener al menos 6 caracteres');
    });
});