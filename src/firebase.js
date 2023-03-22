import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyASIHXp5gkElx_jkyqmAj1Ah5_kzOOa_3k",
    authDomain: "meandblogs-188dc.firebaseapp.com",
    projectId: "meandblogs-188dc",
    storageBucket: "meandblogs-188dc.appspot.com",
    messagingSenderId: "998677417945",
    appId: "1:998677417945:web:c07c0bcce0474ece6793c8"
});

const fb = firebase;

export default fb;