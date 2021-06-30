import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCvPtZ0Q-gPzpDcftsyq0ej2ZON1hQItuc",
    authDomain: "secretmsgapp1.firebaseapp.com",
    projectId: "secretmsgapp1",
    storageBucket: "secretmsgapp1.appspot.com",
    messagingSenderId: "491220415619",
    appId: "1:491220415619:web:fc8c607e7ef38ff6f7d7b6",
    measurementId: "G-8X2KLGZXF7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;  

