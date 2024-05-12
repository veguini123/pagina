import {
    loginvalidation,
  } from "./global.js";

const formularioLogin = document.querySelector('#loginbtn');

formularioLogin.addEventListener("click", async (evento) => {
    evento.preventDefault();

    const email = document.getElementById('edtuser').value;
    const contraseña = document.getElementById('edtpassword').value;

    try {
        const credenciales = await loginvalidation(email, contraseña);
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
                alert('Email no válido.');
                break;
            case "auth/user-disabled":
                alert('La cuenta ha sido desactivada.');
                break;
            case "auth/user-not-found":
                alert('"No se encontró ningún usuario asociado a esta dirección de correo electrónico".');
                break;
            case "auth/missing-password":
                alert('No se ha detectado ninguna contraseña.');
                break;
            case "auth/invalid-credential":
                alert('"La contraseña ingresada es incorrecta".');
                break;
            default:
                alert(errorMessage);
        }
    }
});

atrasbtn.addEventListener('click', (e) => {
    auth.signOut().then(() => {
        alert('"Se ha cerrado la sesión"');
    }).catch((error) =>{+
        alert('"Se produjo un error al terminar la sesión"');
    });
})

