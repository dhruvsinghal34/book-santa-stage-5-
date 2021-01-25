import * as firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyCjRqPUy_2zOMTSlIxo8eonmY3k4hteaQ4",
    authDomain: "booksanta-359d1.firebaseapp.com",
    projectId: "booksanta-359d1",
    storageBucket: "booksanta-359d1.appspot.com",
    messagingSenderId: "875808467160",
    appId: "1:875808467160:web:aac95583ee0814a93a0fad"
  };
  
    firebase.initializeApp(firebaseConfig);
   
  const db = firebase.firestore();
  export default db ;