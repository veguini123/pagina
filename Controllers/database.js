import { collection, addDoc, db } from "./global.js";

const registro = document.getElementById('btnreg');

async function register() {
    const id = document.getElementById('edtced').value;
    const nombre = document.getElementById('edtnamom').value;
    const direccion = document.getElementById('edtcorr').value;
    const telefono = document.getElementById('edttefl').value;
    const fecha = document.getElementById('edtfech').value;

    if (!id || !nombre || !direccion || !telefono || !fecha) {
        alert('Rellena todos los campos.');
        return; 
    }

    try {
        const refDoc = await addDoc(collection(db, "users"), {
            id: id,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            fecha: fecha
        });
        console.log("Documento escrito con ID: ", refDoc.id);
        alert('Registro exitoso de ' + nombre);
        window.location.href = 'registrousu.html';
    } catch (error) {
        console.error("Error al agregar documento: ", error);
        alert('Error al registrar, por favor intenta nuevamente');
        console.log('La sesión de ' + nombre + ' no pudo ser validada');
    }
}

window.addEventListener('DOMContentLoaded', () => {
  registro.addEventListener('click', register);
});