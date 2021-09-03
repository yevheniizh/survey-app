import { LOAD_SURVEYS, CREATE_SURVEY } from '../constants';

export const loadSurveys =
  ({ collection, where }: any) =>
  async (dispatch: any) => {
    const data = await dispatch({
      type: LOAD_SURVEYS,
      isCallAPI: true,
      props: { collection, where },
    });

    return data;
  };

export const createSurvey =
  ({ collection, defaults }: any) =>
  async (dispatch: any) => {
    const data = await dispatch({
      type: CREATE_SURVEY,
      isCallAPI: true,
      props: { collection, defaults },
    });

    return data;
  };
