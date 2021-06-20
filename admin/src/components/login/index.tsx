import * as React from 'react';
import { useContext } from 'react';
import { MyContext } from '../..';
import { NavLink } from 'react-router-dom';
import { SIGN_UP_ROUTE } from '../../utils/consts';
import styles from './styles.module.css';
import firebase from 'firebase/app';

import { Box, Grid, Button, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const Login = () => {
  const { auth } = useContext(MyContext);

  const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <Box className={styles.login__root} pt={8}>
      <Grid container component="main" justify="center">
        <Grid item xs={12} sm={8} md={5}>
          <Typography component="h1" variant="h4">
            Log In
          </Typography>

          <Box mt={1}>
            <Button
              color="primary"
              variant="outlined"
              onClick={loginWithGoogle}
              type="submit"
              fullWidth
            >
              Log In with Google
            </Button>
          </Box>

          <Box mt={1}>
            <NavLink to={SIGN_UP_ROUTE} style={{ color: blue[700] }}>
              Don't have an account? Sign Up
            </NavLink>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
