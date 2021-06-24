import { useReducer } from 'react';

const reducer = (state: any, action: any) => {
  const { isError, message } = action.payload;
  switch (action.type) {
    case 'setEmailErrorState':
      return {
        ...state,
        emailErrorState: {
          isError,
          message,
        },
      };
    case 'setPasswordErrorState':
      return {
        ...state,
        passwordErrorState: {
          isError,
          message,
        },
      };
    default:
      return state;
  }
};

export const useLoginErrorHandler = (initialState = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setEmailErrorState = (isError: boolean, message: string) =>
    dispatch({ type: 'setEmailErrorState', payload: { isError, message } });
  const setPasswordErrorState = (isError: boolean, message: string) =>
    dispatch({ type: 'setPasswordErrorState', payload: { isError, message } });

  return { errorState: state, setEmailErrorState, setPasswordErrorState };
};
