import { arrToMap } from '../utils';

const initialState = { entities: {} };

export default (state = initialState, action: any) => {
  const { type, data } = action;

  switch (type) {
    case 'LOAD_SURVEYS':
      return { ...state, entities: arrToMap(data) };
    default:
      return state;
  }
};
