import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SignUp.module.css';

import { Box, Grid, Button, Typography, TextField } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import auth from '../../services/firebase.service';
import { useFormErrorHandler } from '../../hooks/useFormErrorHandler';
import {
  ERROR_IS_TRUE,
  ERROR_IS_FALSE,
  NO_MESSAGE,
  ERROR_INITIAL_VALUES,
  LOGIN_ROUTE,
} from '../../utils/consts';

const SignUp = () => {
  const { state, setErrorEmail, setErrorPassword } = useFormErrorHandler({
    errorEmail: ERROR_INITIAL_VALUES,
    errorPassword: ERROR_INITIAL_VALUES,
  });

  const handleSignUp = async (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await auth.createUserWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/wrong-password') {
        setErrorEmail(ERROR_IS_FALSE, NO_MESSAGE);
        setErrorPassword(ERROR_IS_TRUE, error.message);
      } else {
        setErrorEmail(ERROR_IS_TRUE, error.message);
        setErrorPassword(ERROR_IS_FALSE, NO_MESSAGE);
      }
    }
  };

  return (
    <Box className={styles.signup__root} pt={8}>
      <Grid container component="main" justify="center">
        <Grid item xs={12} sm={8} md={5}>
          <Typography component="h1" variant="h4">
            Create an account
          </Typography>

          <form className={styles.signup__form} onSubmit={handleSignUp}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              error={state.errorEmail.isError}
              helperText={state.errorEmail.message}
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
              error={state.errorPassword.isError}
              helperText={state.errorPassword.message}
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
                Sign Up
              </Button>
            </Box>
          </form>

          <Box mt={1}>
            <NavLink to={LOGIN_ROUTE} style={{ color: blue[700] }}>
              Have an account? Log In
            </NavLink>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;
