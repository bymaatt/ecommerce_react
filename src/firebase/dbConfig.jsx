// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzQ9kU2iulEevZbMrAxyMiTpaYh3eDqwc",
  authDomain: "ecommerce-react-63edc.firebaseapp.com",
  projectId: "ecommerce-react-63edc",
  storageBucket: "ecommerce-react-63edc.appspot.com",
  messagingSenderId: "754766522011",
  appId: "1:754766522011:web:869a8659b74977a3f7883e"
};

// Initialize Firebase
const app = initializeApp (firebaseConfig);

export const getFirestoreApp =()=>{
    return app
}