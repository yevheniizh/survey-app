import * as React from 'react';

import { Box, CircularProgress } from '@material-ui/core';

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" pt={8}>
      <CircularProgress size={75} />
    </Box>
  );
};

export default Loader;
