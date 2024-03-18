import { loginvalidation } from "../Controllers/global.js";

const loginin = document.getElementById("loginbtn")

function validar() {
    var usuario = document.getElementById("edtuser").value;
    var contraseña = document.getElementById("edtcon").value;
    
    if (usuario.trim() === "" || contraseña.trim() === "") {
        window.alert("Por favor, completa todos los campos.");
        return false; 
    }
    return true; 
}

async function validar(){
    const email = document.getElementById("edtuser").value 
    const pass = document.getElementById("edtcon").value 

    const verificar = loginvalidation(email,pass)
    const validation = await verificar

    if(validation != null){
        alert('Authentication sucessfull '+email)
        window.location.href='../Templates/home.html'
    }
    else{
        alert('Error authentication no sucessfull ')
        console.log('sesion '+email+' no validation')
    }
    
}

window.addEventListener('DOMContentLoaded',async()=>{
    loginin.addEventListener('click',validar)
})


