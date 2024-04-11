// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGnaTqFhJ9or769Mw_nY7q89UisvSVkaE",
  authDomain: "react-estate-project.firebaseapp.com",
  projectId: "react-estate-project",
  storageBucket: "react-estate-project.appspot.com",
  messagingSenderId: "67827502556",
  appId: "1:67827502556:web:ff93ff545e6ef49d43d319"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;