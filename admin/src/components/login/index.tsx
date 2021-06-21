import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { SIGN_UP_ROUTE } from '../../utils/consts';
import styles from './styles.module.css';
import firebase from 'firebase/app';

import { Box, Grid, Button, Typography, TextField } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import auth from '../../services/firebase.service';

const Login = ({ history }: { history: any }) => {
  const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  const handleLogin = async (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await auth.signInWithEmailAndPassword(email.value, password.value);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className={styles.login__root} pt={8}>
      <Grid container component="main" justify="center">
        <Grid item xs={12} sm={8} md={5}>
          <Typography component="h1" variant="h4">
            Log In
          </Typography>
          <form className={styles.login__form} onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Box mt={1}>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
              >
                Log In
              </Button>
            </Box>
          </form>

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
