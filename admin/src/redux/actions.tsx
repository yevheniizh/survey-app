import { LOAD_SURVEYS, REQUEST, SUCCESS, FAILURE } from './constants';
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
