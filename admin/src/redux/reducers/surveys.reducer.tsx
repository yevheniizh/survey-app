import {
  LOAD_SURVEYS,
  CREATE_SURVEY,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
// import { arrToMap } from '../utils';

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
      return { ...state, loading: true, loaded: false, error: null };
    case LOAD_SURVEYS + SUCCESS:
      return {
        ...state,
        // entities: arrToMap(data),
        entities: data,
        loading: false,
        loaded: true,
        error: null,
      };
    case LOAD_SURVEYS + FAILURE:
      return { ...state, loading: false, loaded: false, error };

    case CREATE_SURVEY + REQUEST:
      return state;
    case CREATE_SURVEY + SUCCESS:
      return {
        ...state,
        // entities: arrToMap(data),
        entities: [...state.entities, { ...data }],
      };
    case CREATE_SURVEY + FAILURE:
      return { ...state, error };
    default:
      return state;
  }
};
