import * as React from 'react';
import { useContext } from 'react';
import Header from '../../components/Header';

import { Grid, Typography } from '@material-ui/core';
import { AuthContext } from '../../contexts/AuthContext';

const Home = (): JSX.Element => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Header currentUser={currentUser} />
      <Grid container component="main" justify="center">
        <Grid item xs={12} sm={10} md={10} xl={10}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
          >
            Home
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
