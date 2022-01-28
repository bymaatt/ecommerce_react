
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDzQ9kU2iulEevZbMrAxyMiTpaYh3eDqwc",
  authDomain: "ecommerce-react-63edc.firebaseapp.com",
  projectId: "ecommerce-react-63edc",
  storageBucket: "ecommerce-react-63edc.appspot.com",
  messagingSenderId: "754766522011",
  appId: "1:754766522011:web:869a8659b74977a3f7883e"
};


const app = initializeApp(firebaseConfig);

export const getFireStoreApp =()=>{
    return app
}
    