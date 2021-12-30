import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyD70Q72mu2_GiU3jdekISx8hud7aF4vyyo",
    authDomain: "crwn-db-b4934.firebaseapp.com",
    projectId: "crwn-db-b4934",
    storageBucket: "crwn-db-b4934.appspot.com",
    messagingSenderId: "229428544676",
    appId: "1:229428544676:web:a419309e6061b9700a1231"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;