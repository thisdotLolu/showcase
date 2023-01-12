import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB2FGJNSVGi01jrFbx1LGsVjlbw7427Wv4",
    authDomain: "carssz.firebaseapp.com",
    projectId: "carssz",
    storageBucket: "carssz.appspot.com",
    messagingSenderId: "973419026329",
    appId: "1:973419026329:web:73cbe6a1540e93cf7d2508"
};

const firebaseApp= firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export {auth}











