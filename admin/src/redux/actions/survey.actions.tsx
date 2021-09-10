import { LOAD_SURVEYS, CREATE_SURVEY } from '../constants';
import { db } from '@zzzhyrov/my-perfect-package';

export const loadSurveys =
  ({ collection, where }: any) =>
  async (dispatch: any) => {
    async function CallAPI() {
      const res = await db
        .collection(collection)
        .where(where.field, where.operator, where.value)
        .get();
      const data = res.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return data;
    }

    dispatch({
      type: LOAD_SURVEYS,
      CallAPI,
    });
  };

export const createSurvey =
  ({ collection, defaults }: any) =>
  async (dispatch: any) => {
    async function CallAPI() {
      const res = await db.collection(collection).add(defaults);
      const data = { id: res.id, ...defaults };
      return data;
    }

    const id = await dispatch({
      type: CREATE_SURVEY,
      CallAPI,
    });

    return id;
  };
