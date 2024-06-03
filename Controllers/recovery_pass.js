import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'

import { 
  getAuth,
  sendPasswordResetEmail
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

const recuperar = document.getElementById('btnRecover')

async function salvarpass()
{
    const usuario = document.getElementById('email').value

    try {
      await sendPasswordResetEmail(auth, usuario);
      alert('Password recovery email sent successfully to ' + usuario);
      window.location.href = 'recoverypass.html';
  } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      
  }
}

window.addEventListener('DOMContentLoaded', () => {
  recuperar.addEventListener('click', salvarpass);
});