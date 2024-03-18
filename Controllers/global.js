
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries


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
const analytics = getAnalytics(app);
