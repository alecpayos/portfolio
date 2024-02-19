// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAreuKz8gRf52MlrHIuL32wY5BZ8SbNwUM",
  authDomain: "personal-portfolio-5284d.firebaseapp.com",
  projectId: "personal-portfolio-5284d",
  storageBucket: "personal-portfolio-5284d.appspot.com",
  messagingSenderId: "24315536393",
  appId: "1:24315536393:web:c15eeb70bb792b2f7d84d8",
  measurementId: "G-W34HJ1QZCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);