import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js'
import {collection, addDoc, getDocs , doc, getDoc, setDoc, getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { } from './firebase.js'; 


import {
  getAuth,
  signOut,
  deleteUser,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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
const db = getFirestore();

export {
  deleteUser
};

export {
  app,
  auth,
  sendEmailVerification,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc
};

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

export const signInPopup = (provider) => signInWithPopup(auth, provider);

export const sendEmailToResetPassword = async (email) => sendPasswordResetEmail(auth, email)
//export const sendEmail = async (auth, user) => sendEmailVerification(user);
export const logOut = async () => signOut(auth);

export const loginvalidation = async (email, password) => {
  try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log('Datos del usuario:', userData);
          return {
              user: {
                  uid: user.uid,
                  email: user.email,
                  role: userData.role
              }
          };
      } else {
        console.error("Documento del usuario no encontrado:", user.uid);
        throw new Error("No se encontró el documento del usuario.");
      }
  } catch (error) {
    console.error("Error en loginvalidation:", error);
      throw error;
  }
};

export const createUserEmailPassword = async (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const loginWithGoogle = async (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const loginWithFacebook = async (email, password) =>createUserWithEmailAndPassword(auth, email, password);

export const onAuthChanged = (user) => onAuthStateChanged(auth, user);

export const deleteCurrentUser = async () => auth.currentUser.delete();

export const registerUser = async (email, id, password , nombre, direccion, telefono, fecha) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users",id), {
      id: id,
      email: email,
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      fecha: fecha,
      role: 'user'
    });

    console.log('Documento del usuario creado con UID:', user.uid);
    return user;
  } catch (error) {
    throw error;
  }
};

export const searchReg=(id)=>
  getDoc(doc(db,"users",id))

//Consultar registros
export const realusers=()=>
  getDocs(collection(db, "users"));
