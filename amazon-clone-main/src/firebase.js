import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA_ixcYD49aeTHKVy2ar7jetNHZYTyWRwM",
    authDomain: "amamzone-clone.firebaseapp.com",
    projectId: "amamzone-clone",
    storageBucket: "amamzone-clone.appspot.com",
    messagingSenderId: "962962120139",
    appId: "1:962962120139:web:8c26ddc5bb9ac854af2a4e",
    measurementId: "G-Y94BK51YB0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};