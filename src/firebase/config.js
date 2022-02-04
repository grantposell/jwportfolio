import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:'AIzaSyCvn9jdS6VGaQ1RdAdWJ3H37p2iCNC8PvI',
  authDomain: 'jwoehling-project-prod.firebaseapp.com',
  projectId: 'jwoehling-project-prod',
  storageBucket: 'jwoehling-project-prod.appspot.com',
  messagingSenderId: '126468792083',
  appId: '0a28f137b3315597ad84e6'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp, auth};