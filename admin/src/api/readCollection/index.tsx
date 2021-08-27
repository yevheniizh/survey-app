import React from 'react';
import { UseReadCollection } from './hook';
import { ReadCollectionType } from '../index';
import { db } from '@zzzhyrov/my-perfect-package';

const NoResults = ({ collection, defaults, Redirect }: any) => {
  const [loading, setLoading] = React.useState(false);
  const [id, setId] = React.useState(null);
  console.log(id);
  if (id) {
    /* eslint-disable */
    return <Redirect to={`/${collection}/${id}`} />; //history.push(`/${collection}/${id}`);
    /* eslint-enable */
  }
  const onClick = async () => {
    setLoading(true);
    try {
      const docRef = await db.collection(collection).add(defaults);
      console.log(docRef);

      setLoading(false);
      setId(docRef.id);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div>
      <button disabled={loading} onClick={onClick}>
        Create new document
      </button>
    </div>
  );
};
const Loading = () => <h1>Loading...</h1>;

// eslint-disable-next-line unused-imports/no-unused-vars
const Error = (error: any) => {
  console.log(error);
  return <h1>something went wrong</h1>;
};

export const ReadCollection = ({ data }: { data: ReadCollectionType }) => {
  const { CollectionView, collection, defaults, history, Redirect } = data;
  const { result, error, loading } = UseReadCollection({ ...data });
  console.log(result, error, loading);
  if (!result.length) {
    return (
      <NoResults
        history={history}
        Redirect={Redirect}
        collection={collection}
        defaults={defaults}
      />
    );
  }
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }

  if (result) {
    return <CollectionView data={result} />;
  }

  return <h1>I cant understand you</h1>;
};
