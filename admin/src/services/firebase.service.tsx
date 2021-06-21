import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDXd9tTpe3joIJNx3Bqw0WJkhBRpKLqSSU',
  authDomain: 'admin--survey.firebaseapp.com',
  projectId: 'admin--survey',
  storageBucket: 'admin--survey.appspot.com',
  messagingSenderId: '226587562987',
  appId: '1:226587562987:web:19be7a6b3fbf24e9f4ffae',
  measurementId: 'G-C09JY3RV7E',
});

const auth = app.auth();

export default auth;
