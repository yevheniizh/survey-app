import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyDXd9tTpe3joIJNx3Bqw0WJkhBRpKLqSSU',
    authDomain: 'admin--survey.firebaseapp.com',
    projectId: 'admin--survey',
    storageBucket: 'admin--survey.appspot.com',
    messagingSenderId: '226587562987',
    appId: '1:226587562987:web:19be7a6b3fbf24e9f4ffae',
    measurementId: 'G-C09JY3RV7E',
};

const app = firebase.initializeApp(firebaseConfig);

export const authenticate = () => {
    firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            return firebase
                .auth()
                .signInWithPopup(new firebase.auth.GoogleAuthProvider());
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
};
export const fireAuth = app.auth();
export const db = app.firestore();
export const st = app.storage();

