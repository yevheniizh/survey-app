import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAgjDRxvnG2g5IyAlc9YghZZAzB7SrauBA',
  authDomain: 'admin--survey-app.firebaseapp.com',
  projectId: 'admin--survey-app',
  storageBucket: 'admin--survey-app.appspot.com',
  messagingSenderId: '973776769956',
  appId: '1:973776769956:web:41926346c219e250562731',
};

const app = firebase.initializeApp(firebaseConfig);

export const googleLogin = () => {
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
export const formLogin = async (event, errorActions) => {
  event.preventDefault();
  const { email, password } = event.target.elements;
  try {
    await app.auth().signInWithEmailAndPassword(email.value, password.value);
  } catch (error) {
    console.log(error);
    errorActions(error);
  }
};
export const formSignUp = async (event, errorActions) => {
  event.preventDefault();
  const { email, password } = event.target.elements;
  try {
    await app
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value);
  } catch (error) {
    console.log(error);
    errorActions(error);
  }
};
export const fireAuth = app.auth();
export const fireSignOut = fireAuth.signOut();
export const db = app.firestore();
export const st = app.storage();
