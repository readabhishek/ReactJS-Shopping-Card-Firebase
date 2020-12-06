import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';




    // Your web app's Firebase configuration

    const firebaseConfig = {
    apiKey: "AIzaSyDoqvT9skXW_wlwfrdI6gd88ghu91oH8OY",
    authDomain: "cart-project-ce4d7.firebaseapp.com",
    projectId: "cart-project-ce4d7",
    storageBucket: "cart-project-ce4d7.appspot.com",
    messagingSenderId: "506331121586",
    appId: "1:506331121586:web:6703b4e2e20865d2ea86ab"
};

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);




ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
