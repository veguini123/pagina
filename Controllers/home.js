import { userstate, logout } from "./global.js";

userstate()
const sesion=document.getElementById('btnatras')

async function cerrarsesion(){

    const verificacion = logout()
    const validacion = await verificacion

    .then((validacion) =>
    {
        alert('Se ha cerrado la sesión')
        window.location.href="../index2.html"
    })
    .catch((error) => {
        alert=('Se produjo un error al terminar la sesión')
    });

}

window.addEventListener("DOMContentLoaded",async()=>
{
    sesion.addEventListener('click',cerrarsesion)
})