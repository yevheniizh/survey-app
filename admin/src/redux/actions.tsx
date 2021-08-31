import { db } from '@zzzhyrov/my-perfect-package';

export const loadSurveys =
  ({ collection, where }: any) =>
  async (dispatch: any) => {
    try {
      const request = await db
        .collection(collection)
        .where(where.field, where.operator, where.value)
        .get();
      const data: Array<any> = request.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch({ type: 'LOAD_SURVEYS', data });

      return data;
    } catch {
      console.log('Error');
    }
  };
