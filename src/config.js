import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';


firebase.initializeApp({
    apiKey: "AIzaSyAT1qtuw-wWOBzXZCAYb2f8azv11JBsSM0",
    authDomain: "scl011-burger-queen.firebaseapp.com",
    databaseURL: "https://scl011-burger-queen.firebaseio.com",
    projectId: "scl011-burger-queen",
    storageBucket: "scl011-burger-queen.appspot.com",
    messagingSenderId: "148959434327",
    appId: "1:148959434327:web:2c3b4f16abd05bfbadf512",
    measurementId: "G-QVE7SJ2Y0T"
});

let db=firebase.firestore();

export default db;



//let db=firebase.firestore();
//export default db;


/*import 'firebase/firestore';
import 'firebase/database';

export default {

    apiKey: "AIzaSyAT1qtuw-wWOBzXZCAYb2f8azv11JBsSM0",
    authDomain: "scl011-burger-queen.firebaseapp.com",
    databaseURL: "https://scl011-burger-queen.firebaseio.com",
    projectId: "scl011-burger-queen",
    storageBucket: "scl011-burger-queen.appspot.com",
    messagingSenderId: "148959434327",
    appId: "1:148959434327:web:2c3b4f16abd05bfbadf512",
    measurementId: "G-QVE7SJ2Y0T"
}

*/