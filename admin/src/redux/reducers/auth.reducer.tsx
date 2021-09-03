import {
  LOGIN,
  GOOGLE_LOGIN,
  SIGNUP,
  SIGNOUT,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action: any) => {
  const { data, type, error } = action;

  switch (type) {
    case (LOGIN || SIGNUP || GOOGLE_LOGIN) + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case (LOGIN || SIGNUP || GOOGLE_LOGIN) + SUCCESS:
      return {
        ...state,
        entities: data,
        loading: false,
        loaded: false,
        error: null,
      };
    case (LOGIN || SIGNUP || GOOGLE_LOGIN) + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };

    case SIGNOUT + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case SIGNOUT + SUCCESS:
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: null,
      };
    case SIGNOUT + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    default:
      return state;
  }
};
