import { db } from '@zzzhyrov/my-perfect-package';
import {
  LOAD_SURVEYS,
  CREATE_SURVEY,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

export default (store: any) =>
  (next: any) =>
  async (action: { type: string; isCallAPI: string; props: any }) => {
    if (!action.isCallAPI) return next(action);

    const { type, props, ...rest } = action;

    next({ ...rest, type: type + REQUEST });

    try {
      const res =
        type === LOAD_SURVEYS
          ? loadSurveys
          : type === CREATE_SURVEY
          ? createSurvey
          : loadSurveys;

      const data = await res(props);

      next({ ...rest, type: type + SUCCESS, data });

      return data;
    } catch (error) {
      throw next({ ...rest, type: type + FAILURE, error });
    }
  };

async function loadSurveys({ collection, where }: any) {
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

async function createSurvey({ collection, defaults }: any) {
  const res = await db.collection(collection).add(defaults);
  const data = { id: res.id, ...defaults };
  return data;
}
