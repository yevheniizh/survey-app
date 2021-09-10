import {
  GET_PROFILE,
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
    case GET_PROFILE:
      return {
        ...state,
        entities: data,
      };
    case GOOGLE_LOGIN + REQUEST:
    case LOGIN + REQUEST:
    case SIGNUP + REQUEST:
    case SIGNOUT + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case GOOGLE_LOGIN + SUCCESS:
    case LOGIN + SUCCESS:
    case SIGNUP + SUCCESS:
    case SIGNOUT + SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    case GOOGLE_LOGIN + FAILURE:
    case LOGIN + FAILURE:
    case SIGNUP + FAILURE:
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
