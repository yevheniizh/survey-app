import { useReducer } from 'react';

const reducer = (state: any, action: any) => {
  const { isError, message } = action.payload;
  switch (action.type) {
    case 'setErrorLogin':
      return {
        ...state,
        errorEmail: {
          isError,
          message,
        },
      };
    case 'setErrorPassword':
      return {
        ...state,
        errorPassword: {
          isError,
          message,
        },
      };
    default:
      return state;
  }
};

export const useFormErrorHandler = (initialState = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setErrorEmail = (isError: boolean, message: string) =>
    dispatch({ type: 'setErrorLogin', payload: { isError, message } });
  const setErrorPassword = (isError: boolean, message: string) =>
    dispatch({ type: 'setErrorPassword', payload: { isError, message } });

  return { state, setErrorEmail, setErrorPassword };
};
