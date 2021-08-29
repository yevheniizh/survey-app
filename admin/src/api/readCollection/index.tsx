import React from 'react';
import { UseReadCollection } from './hook';
import { ReadCollectionType } from '../index';
import { db } from '@zzzhyrov/my-perfect-package';
import { Box, Button } from '@material-ui/core';

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
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
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
