import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Login.module.css';
import authService from '../../services/auth.service';
import { SIGN_UP_ROUTE } from '../../utils/consts';

import { Box, Grid, Button, Typography, TextField } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const Login = () => {
  const { errorState, classicLogin, googleLogin } = authService();
  const { emailErrorState, passwordErrorState } = errorState;

  return (
    <Box className={styles.login__root} pt={8}>
      <Grid container component="main" justify="center">
        <Grid item xs={12} sm={8} md={5}>
          <Typography component="h1" variant="h4">
            Log In
          </Typography>
          <form className={styles.login__form} onSubmit={classicLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              error={emailErrorState.isError}
              helperText={emailErrorState.message}
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
              error={passwordErrorState.isError}
              helperText={passwordErrorState.message}
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
              onClick={googleLogin}
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
