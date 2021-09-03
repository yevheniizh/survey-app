import { LOGIN, SIGNOUT, SIGNUP, GOOGLE_LOGIN } from '../constants';

export const logIn =
  ({ event, errorActions }: any) =>
  async (dispatch: any) =>
    await dispatch({
      type: LOGIN,
      isCallAPI: true,
      props: { event, errorActions },
    });

export const signUp =
  ({ event, errorActions }: any) =>
  async (dispatch: any) =>
    await dispatch({
      type: SIGNUP,
      isCallAPI: true,
      props: { event, errorActions },
    });

export const googleLogIn = () => async (dispatch: any) =>
  await dispatch({
    type: GOOGLE_LOGIN,
    isCallAPI: true,
  });

export const signOut = () => async (dispatch: any) =>
  await dispatch({
    type: SIGNOUT,
    isCallAPI: true,
  });
