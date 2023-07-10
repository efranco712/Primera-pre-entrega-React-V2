import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEBuQRtiF2XHL6s-1qwa3ki6cRvu9DZ_8",
    authDomain: "adidas-coder.firebaseapp.com",
    projectId: "adidas-coder",
    storageBucket: "adidas-coder.appspot.com",
    messagingSenderId: "733545943348",
    appId: "1:733545943348:web:09122fc9b0f24e4c6c5561",
    measurementId: "G-J6366J7YPB"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


