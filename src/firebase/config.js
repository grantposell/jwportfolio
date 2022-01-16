import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWqGwdBEwMsgLXrp3lme326XYEdLKr4ZA",
  authDomain: "jwoehling-portfolio.firebaseapp.com",
  projectId: "jwoehling-portfolio",
  storageBucket: "jwoehling-portfolio.appspot.com",
  messagingSenderId: "202138164361",
  appId: "1:202138164361:web:881d624ebdda76f5123a58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};