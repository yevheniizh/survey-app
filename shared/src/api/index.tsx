import * as React from 'react';
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import { db } from './config';

export const UseReadDoc = ({
  docId,
  collection,
  Component,
  Loading,
  Error,
  props,
}) => {
  const [value, loading, error] = useDocumentDataOnce(
    db.doc(`${collection}/${docId}`)
  );

  return (
    <React.Fragment>
      {!value && !loading && <Error {...props} />}
      {loading && <Loading {...props} />}
      {value && <Component {...value} />}
    </React.Fragment>
  );
};
