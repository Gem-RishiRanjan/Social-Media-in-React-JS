// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOY74PnH25MGdh1S-L3YoSRJO-8II_bi4",
    authDomain: "social-media-b1c8a.firebaseapp.com",
    projectId: "social-media-b1c8a",
    storageBucket: "social-media-b1c8a.appspot.com",
    messagingSenderId: "156082660450",
    appId: "1:156082660450:web:bd834fb86a334fbf21dd3b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);