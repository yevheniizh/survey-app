import firebase from 'firebase/app';
import app from './firebase.service';
import { useFormErrorHandler } from '../hooks/useFormErrorHandler';
import {
  ERROR_INITIAL_VALUES,
  ERROR_IS_FALSE,
  ERROR_IS_TRUE,
  NO_MESSAGE,
} from '../utils/consts';

export default () => {
  // init error state
  const { errorState, setEmailErrorState, setPasswordErrorState } =
    useFormErrorHandler({
      emailErrorState: ERROR_INITIAL_VALUES,
      passwordErrorState: ERROR_INITIAL_VALUES,
    });

  const classicLogin = async (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      console.log(error);
      if (
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/weak-password'
      ) {
        setEmailErrorState(ERROR_IS_FALSE, NO_MESSAGE);
        setPasswordErrorState(ERROR_IS_TRUE, error.message);
      } else {
        setEmailErrorState(ERROR_IS_TRUE, error.message);
        setPasswordErrorState(ERROR_IS_FALSE, NO_MESSAGE);
      }
    }
  };

  const classicSignUp = async (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      console.log(error);
      if (
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/weak-password'
      ) {
        setEmailErrorState(ERROR_IS_FALSE, NO_MESSAGE);
        setPasswordErrorState(ERROR_IS_TRUE, error.message);
      } else {
        setEmailErrorState(ERROR_IS_TRUE, error.message);
        setPasswordErrorState(ERROR_IS_FALSE, NO_MESSAGE);
      }
    }
  };

  const googleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await app.auth().signInWithPopup(provider);
    console.log(user);
  };

  return { errorState, classicLogin, classicSignUp, googleLogin };
};
