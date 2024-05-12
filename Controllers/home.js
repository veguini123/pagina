import {
  onAuthChanged,
  logOut,
  deleteCurrentUser,
} from "./global.js";

const cerrar=document.getElementById('btnlogout');
const eliminar = document.getElementById('btnborrar');

document.addEventListener("DOMContentLoaded", () => {
  let currentUser;

  onAuthChanged((user) => {
    if (!user) {
      window.location.href = "../index2.html";
    } else {
      currentUser = user;
      getData(user.uid).then((e) => {
          let data = e.data();
          userData.innerHTML = 

          `
            <h3>Cedula:</h3> ${data["cc"]} 
            <h3>Nombre:</h3> ${data["fullName"]} 
            <h3>Direccion:</h3> ${data["address"]} 
            <h3>Telefono:</h3> ${data["phone"]} 
            <h3>Correo:</h3> ${data["email"]} 
            <h3>Fecha De Naciemiento:</h3> ${data["bornDate"]} 
          `

      });
    }
  });

  async function sesion(){
    const validar = logOut()
    const verificar = await validar

    .then((verificar) => {
        alert('Se ha cerrado la sesión')
        window.location.href="../index2.html"
      }).catch((error) => {
        alert('Se produjo un error al terminar la sesión')
      });
    }
  cerrar.addEventListener("click", sesion);
  eliminar.addEventListener("click", deleteCurrentUser);
});