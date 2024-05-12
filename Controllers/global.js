import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js'
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

import {
  getAuth,
  signOut,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  createUserWithEmailAndPassword,
} 
from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGYNRj5qyJZ03BfQJ6DM8kpmWz5Y9uX94",
  authDomain: "apiweb2024alejo.firebaseapp.com",
  projectId: "apiweb2024alejo",
  storageBucket: "apiweb2024alejo.appspot.com",
  messagingSenderId: "633367156898",
  appId: "1:633367156898:web:55923ecede540b9188dffb",
  measurementId: "G-6PF1Y0YC4S"
};

export {
  auth
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export { collection, addDoc, db };
export function AddData(id, name, direccion, telefono, fecha) {
}

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const signInPopup = (provider) => signInWithPopup(auth, provider);
export const sendEmailToResetPassword = async (email) => sendPasswordResetEmail(auth, email)
export const sendEmail = async (auth, user) => sendEmailVerification(user);
export const logOut = async () => signOut(auth);
export const loginvalidation=(email,password)=> signInWithEmailAndPassword(auth, email, password)
export const createUserEmailPassword = async (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const loginWithGoogle = async (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const loginWithFacebook = async (email, password) =>createUserWithEmailAndPassword(auth, email, password);
export const onAuthChanged = (user) => onAuthStateChanged(auth, user);
export const deleteCurrentUser = async () => auth.currentUser.delete();