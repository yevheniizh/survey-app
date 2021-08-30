/* eslint-disable unused-imports/no-unused-vars */
import React from 'react';
import { db } from '@zzzhyrov/my-perfect-package';

export function UseReadCollection({ defaults, collection, where }: any) {
  const [result, setResult] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchBookList() {
      try {
        setLoading(true);
        const querySnapshot = await db
          .collection(collection)
          .where(where.field, where.operator, where.value)
          .get();
        const result: Array<any> = querySnapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // @ts-ignore
        setResult(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }

    fetchBookList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { result, loading, error };
}
