// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGhq2l4PnZDZLT43q1EQ-ZBkeCpesYm10",
  authDomain: "flashcard-saas-ce894.firebaseapp.com",
  projectId: "flashcard-saas-ce894",
  storageBucket: "flashcard-saas-ce894.appspot.com",
  messagingSenderId: "49442079157",
  appId: "1:49442079157:web:3e46f2656ab288107159fc",
  measurementId: "G-T80KPMCF7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};