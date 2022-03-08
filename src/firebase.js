// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6Y0rWuybzV_OIrTlBoJFvNW-m7wdH_ZQ",
    authDomain: "ey-insurance-5a2d0.firebaseapp.com",
    projectId: "ey-insurance-5a2d0",
    storageBucket: "ey-insurance-5a2d0.appspot.com",
    messagingSenderId: "934222267880",
    appId: "1:934222267880:web:7257870b9bc0eab07fd05d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 