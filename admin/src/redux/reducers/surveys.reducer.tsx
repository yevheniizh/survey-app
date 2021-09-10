import {
  LOAD_SURVEYS,
  SIGNOUT,
  CREATE_SURVEY,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

const initialState = {
  entities: [],
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action: any) => {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_SURVEYS + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case LOAD_SURVEYS + SUCCESS:
      return {
        ...state,
        entities: data,
        loading: false,
        loaded: true,
      };
    case LOAD_SURVEYS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    case CREATE_SURVEY + REQUEST:
      return {
        ...state,
        error: null,
      };
    case CREATE_SURVEY + SUCCESS:
      return {
        ...state,
        entities: [...state.entities, { ...data }],
      };
    case CREATE_SURVEY + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    case SIGNOUT + SUCCESS:
      return { ...state, entities: [] };
    default:
      return state;
  }
};
