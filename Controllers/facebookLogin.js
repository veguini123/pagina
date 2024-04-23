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
  signInWithPopup, 
  FacebookAuthProvider
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'

const facebookButton = document.querySelector('#facebookLogin')

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new FacebookAuthProvider();

facebookButton.addEventListener('click', async () => {
  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);

    const modal = new bootstrap.Modal(document.querySelector('#signinModal'));
    modal.hide();

    alert('Autenticación exitosa: ' + credentials.user.displayName);
    window.location.href = '../Templates/home.html';
  } catch (error) {
    console.error(error);
  }
});