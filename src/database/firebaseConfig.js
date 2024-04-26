// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkvIbp9FVJtIUAHWw7d28E3mjRqhY2Ck4",
  authDomain: "banco-de-dados-adm.firebaseapp.com",
  projectId: "banco-de-dados-adm",
  storageBucket: "banco-de-dados-adm.appspot.com",
  messagingSenderId: "211386821957",
  appId: "1:211386821957:web:c2d947df30608349e6622c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);