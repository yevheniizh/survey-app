import {
  GET_PROFILE,
  LOGIN,
  SIGNOUT,
  SIGNUP,
  GOOGLE_LOGIN,
} from '../constants';
import {
  fireAuth,
  googleLogin,
  formLogin,
  formSignUp,
} from '@zzzhyrov/my-perfect-package';

export const getProfile = (data: any) => ({
  type: GET_PROFILE,
  data,
});

export const logIn =
  ({ event, errorActions }: any) =>
  async (dispatch: any) => {
    async function CallAPI() {
      await formLogin(event, errorActions);
    }

    dispatch({
      type: LOGIN,
      CallAPI,
    });
  };

export const signUp =
  ({ event, errorActions }: any) =>
  async (dispatch: any) => {
    async function CallAPI() {
      await formSignUp(event, errorActions);
    }

    dispatch({
      type: SIGNUP,
      CallAPI,
    });
  };

export const googleLogIn = () => async (dispatch: any) => {
  async function CallAPI() {
    await googleLogin();
  }

  dispatch({
    type: GOOGLE_LOGIN,
    CallAPI,
  });
};

export const signOut = () => async (dispatch: any) => {
  async function CallAPI() {
    await fireAuth.signOut();
  }

  dispatch({
    type: SIGNOUT,
    CallAPI,
  });
};
