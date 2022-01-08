// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbifgBYbKNc0qSW7Rz_EveP-WsthcgALw",
  authDomain: "nfttasker.firebaseapp.com",
  projectId: "nfttasker",
  storageBucket: "nfttasker.appspot.com",
  messagingSenderId: "418553589172",
  appId: "1:418553589172:web:ee61e646cd654f83d0d6e1",
  measurementId: "G-H1YHJST8HY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);