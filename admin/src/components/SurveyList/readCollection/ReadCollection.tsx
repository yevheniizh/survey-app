import React from 'react';
import { UseReadCollection } from './UseReadCollection';
import { db } from '@zzzhyrov/my-perfect-package';
import Loader from '../../Loader';
import Error from '../../Error';

/** material-ui */
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

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

const NoResults = ({ collection, defaults, Redirect }: any) => {
  const [loading, setLoading] = React.useState(false);
  const [id, setId] = React.useState(null);
  console.log(id);
  if (id) {
    /* eslint-disable */
    return <Redirect to={`/${collection}/${id}`} />;
    // history.push(/${collection}/${id});
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
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
      }}
    >
      <Button
        disabled={loading}
        onClick={onClick}
        variant="contained"
        color="inherit"
        size="large"
        style={{
          width: '400px',
          textTransform: 'none',
        }}
      >
        Create New Document
      </Button>
    </Box>
  );
};

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
        <NoResults
          history={history}
          Redirect={Redirect}
          collection={collection}
          defaults={defaults}
        />

        {!!result.length && <CollectionView data={result} />}
      </>
    );
  }

  return <h1>I cant understand you</h1>;
};
