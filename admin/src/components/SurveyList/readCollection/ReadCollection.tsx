import * as React from 'react';
import { UseReadCollection } from './UseReadCollection';
import { CreateDocButton } from './CreateDocButton';
import Loader from '../../Loader';
import Error from '../../Error';

export interface ReadCollectionType {
  collection: string;
  where: {
    field: string;
    operator: string;
    value: string;
  };
  CollectionView: any;
  defaults?: any;
  history?: any;
  Redirect?: any;
}

export const ReadCollection = ({ data }: { data: ReadCollectionType }) => {
  const { CollectionView, collection, defaults, history, Redirect } = data;
  const { result, loaded, loading, error } = UseReadCollection({ ...data });

  if (error) {
    return <Error errorText="Something went wrong" />;
  }

  if (loading || !loaded) {
    return <Loader />;
  }

  if (result) {
    return (
      <>
        <CreateDocButton
          history={history}
          Redirect={Redirect}
          collection={collection}
          defaults={defaults}
        />

        {!result.length && <div>There are no surveys yet</div>}
        {!!result.length && <CollectionView data={result} />}
      </>
    );
  }

  return <h1>I cant understand you</h1>;
};
