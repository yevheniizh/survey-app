import * as React from 'react';
import { useSelector } from 'react-redux';
import { UseAddToCollection } from './UseAddToCollection';

/** material-ui */
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export const CreateDocButton = ({ collection, defaults, Redirect }: any) => {
  const { loading } = useSelector((state: any) => state.surveys);
  const [clicked, setClicked] = React.useState(false);
  const { id } = UseAddToCollection(
    { collection, defaults },
    clicked,
    setClicked
  );

  const onClick = () => setClicked(true);

  if (id) {
    return <Redirect to={`/${collection}/${id}`} />;
  }

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
