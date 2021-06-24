import { useLoginErrorHandler } from '../hooks/useLoginErrorHandler';
import {
  ERROR_INITIAL_VALUES,
  ERROR_IS_FALSE,
  ERROR_IS_TRUE,
  NO_MESSAGE,
} from '../utils/consts';

export default () => {
  // init login error state while logging in
  const { errorState, setEmailErrorState, setPasswordErrorState } =
    useLoginErrorHandler({
      emailErrorState: ERROR_INITIAL_VALUES,
      passwordErrorState: ERROR_INITIAL_VALUES,
    });

  // dispatch error actions (if receive error from API) while logging in
  const errorActions = (error: any) => {
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
  };

  return { errorState, errorActions };
};
