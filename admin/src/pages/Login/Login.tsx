import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, SIGN_UP_ROUTE } from '../../utils/consts';
import styles from './Login.module.css';

/** Auth */
import {
  googleLogin,
  formLogin,
  formSignUp,
} from '@alega-lab/my-perfect-package';
import loginErrorHandler from '../../services/loginErrorHandler.service';

/** Material UI */
import { Box, Grid, Button, Typography, TextField } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const Login = ({ match }: { match: any }) => {
  /** define what route is rendering now */
  const isSignupPage = match.path === '/signup';
  /** form error handler */
  const { errorState, errorActions } = loginErrorHandler();
  const { emailErrorState, passwordErrorState } = errorState;

  const onSubmit = isSignupPage
    ? (event: any) => formSignUp(event, errorActions)
    : (event: any) => formLogin(event, errorActions);

  return (
    <Box className={styles.login__root} pt={8}>
      <Grid container component="main" justify="center">
        <Grid item xs={12} sm={8} md={5}>
          <Typography component="h1" variant="h4">
            {isSignupPage ? 'Create an account' : 'Log In'}
          </Typography>
          <form className={styles.login__form} onSubmit={onSubmit}>
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
                {isSignupPage ? 'Sign Up' : 'Log In'}
              </Button>
            </Box>
          </form>

          {isSignupPage ? (
            <Box mt={1}>
              <NavLink to={LOGIN_ROUTE} style={{ color: blue[700] }}>
                Have an account? Log In
              </NavLink>
            </Box>
          ) : (
            <>
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
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
