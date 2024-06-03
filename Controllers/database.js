import { auth, registerUser, searchReg, sendEmailVerification } from "./global.js";
import {} from "./firebase.js";
//import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const registro = document.getElementById('btnreg');
const search=document.getElementById("btnserach");
const Visualizar = document.getElementById('container1')

async function register() {
    const email = document.getElementById('emailreg').value;
    const password = document.getElementById('passwordreg').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    const id = document.getElementById('user-cc').value;
    const nombre = document.getElementById('edtname').value;
    const direccion = document.getElementById('user-address').value;
    const telefono = document.getElementById('user-phone').value;
    const fecha = document.getElementById('edtdate').value;

    function validarContraseña(password) {
        const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        return regexContraseña.test(password);
    }

    function validarEmail(email) {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regexEmail.test(email);
  }

    if (!email || !password || !confirmPassword || !id || !nombre || !direccion || !telefono || !fecha) {
        alert('Rellena todos los campos.');
        return;
      }

    if (!validarEmail(email)) {
        alert('Ingrese un correo electrónico válido.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    if (!validarContraseña(password)) {
        alert('La contraseña debe tener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula y un carácter especial.');
        return; 
    }  
    
    try {
        const user = await registerUser(email, id, password, nombre, direccion, telefono, fecha);
            alert('Registro exitoso de ' + nombre);

        if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
        console.log('Correo de verificación enviado a:', auth.currentUser.email);
        alert('Se ha enviado un correo de verificación');
        window.location.href = '../Templates/regisdatab.html';
    } else {
        console.error('No hay usuario autenticado.');
        alert('Error al registrar, por favor intenta nuevamente');
    }
      } catch (error) {
        console.error("Error al registrar el usuario: ", error);
        alert('Error al registrar, por favor intenta nuevamente');
      }
    }
  
async function buscando(){
  const cedula = document.getElementById("user-cc").value;

  const validar = searchReg (cedula)
  const docSnap = await validar

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    const id = docSnap.data().id;
      const email = docSnap.data().email;
      const nombre = docSnap.data().nombre;
      const direccion = docSnap.data().direccion;
      const telefono = docSnap.data().telefono;
      const fecha = docSnap.data().fecha;

    const queryParams = new URLSearchParams({
      id: id,
      email: email,
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      fecha: fecha
    }).toString();

    window.location.href = `../Templates/viewdatabase.html?${queryParams}`;
} else {
    console.log("No such document!");
    alert('No existe ese documento');
}
}

  window.addEventListener('DOMContentLoaded', () => {
    registro.addEventListener('click', register);
    search.addEventListener("click", buscando);
  });