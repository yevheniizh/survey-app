import * as React from 'react';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MyContext } from '../..';
import Header from '../Header';

import { Grid, Typography } from '@material-ui/core';

const Home = (): JSX.Element => {
  const { auth } = useContext(MyContext);
  const [user] = useAuthState(auth);

  return (
    <>
      <Header auth={auth} user={user} />
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
