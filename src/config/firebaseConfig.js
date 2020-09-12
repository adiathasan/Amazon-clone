import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDRdY2_QDi2rx4845iATwLxSPyQmDGY0Qo",
    authDomain: "clone-ad.firebaseapp.com",
    databaseURL: "https://clone-ad.firebaseio.com",
    projectId: "clone-ad",
    storageBucket: "clone-ad.appspot.com",
    messagingSenderId: "945735233335",
    appId: "1:945735233335:web:aa35359a740c8915b1f4b2",
    measurementId: "G-ZP7G0ZZGSZ"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseApp.firestore();

const auth = firebase.auth();

export {firestore, auth};