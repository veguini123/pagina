import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';
import { collection, addDoc, getDocs , doc, getDoc, setDoc, deleteDoc, updateDoc, query, where } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";


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
const db = getFirestore(app);

export {
    app,
    auth,
    db,
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    setDoc,
    deleteDoc,
    updateDoc,
    signInWithEmailAndPassword,
    query,
    where,
  };