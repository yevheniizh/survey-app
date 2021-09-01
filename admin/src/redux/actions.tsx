import {
  LOAD_SURVEYS,
  CREATE_SURVEY,
  REQUEST,
  SUCCESS,
  FAILURE,
} from './constants';
import { db } from '@zzzhyrov/my-perfect-package';

export const loadSurveys =
  ({ collection, where }: any) =>
  async (dispatch: any) => {
    dispatch({ type: LOAD_SURVEYS + REQUEST });

    try {
      const request = await db
        .collection(collection)
        .where(where.field, where.operator, where.value)
        .get();
      const data: Array<any> = request.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch({ type: LOAD_SURVEYS + SUCCESS, data });

      return data;
    } catch (error) {
      dispatch({ type: LOAD_SURVEYS + FAILURE, error });
    }
  };

export const createSurvey =
  ({ collection, defaults }: any) =>
  async (dispatch: any) => {
    dispatch({ type: CREATE_SURVEY + REQUEST });

    try {
      const request = await db.collection(collection).add(defaults);
      const data = { id: request.id, ...defaults };

      dispatch({ type: CREATE_SURVEY + SUCCESS, data });

      return data.id;
    } catch (error) {
      dispatch({ type: CREATE_SURVEY + FAILURE, error });
    }
  };

export const test = (data: string) => () => {
  console.log('TEST ACTION');
  return data;
};
