/* eslint-disable @typescript-eslint/no-unused-vars */
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
        const ret: Array<any> = [];
        querySnapshot.forEach((doc: any) => {
          ret.push(doc.data());
        });
        // @ts-ignore
        setResult(ret);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { result, loading, error };
}
