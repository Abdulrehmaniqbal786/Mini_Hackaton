
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxC3CiRP1xczFnVSn7TBFTiqCraR5bzco",
  authDomain: "react-mini-hackaton.firebaseapp.com",
  databaseURL: "https://react-mini-hackaton-default-rtdb.firebaseio.com",
  projectId: "react-mini-hackaton",
  storageBucket: "react-mini-hackaton.appspot.com",
  messagingSenderId: "253938221669",
  appId: "1:253938221669:web:996692bf016eec947abc8c"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);
const database = getDatabase(firebase_app);


export {firebase_app,auth,database}