import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
//import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics .js'
import { 
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics();
const auth = getAuth(app);

//metodo de inicio de sesión
export const loginvalidation=(email,password)=> signInWithEmailAndPassword(auth, email, password)

export const logout=()=>signOut(auth);


export function userstate() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
      window.location.href="../index.html"
    }
  });
}

export function forgotkey() {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert('consultar correo electronico')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}