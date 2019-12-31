import * as firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyBLB_FnAs4sVc_FLtGjaE-lppa6THOyATw",
    authDomain: "burger-queen-2dc5a.firebaseapp.com",
    databaseURL: "https://burger-queen-2dc5a.firebaseio.com",
    projectId: "burger-queen-2dc5a",
    storageBucket: "burger-queen-2dc5a.appspot.com",
    messagingSenderId: "18999617156",
    appId: "1:18999617156:web:68aa7360d5365769c484d1"
  });
  // Initialize Firebase
  let db = firebase.firestore();
 

  export default db;