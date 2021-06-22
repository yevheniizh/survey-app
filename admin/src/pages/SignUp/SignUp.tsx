import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SignUp.module.css';
import authService from '../../services/auth.service';
import { LOGIN_ROUTE } from '../../utils/consts';

import { Box, Grid, Button, Typography, TextField } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const SignUp = () => {
  const { errorState, classicSignUp } = authService();
  const { emailErrorState, passwordErrorState } = errorState;

  return (
    <Box className={styles.signup__root} pt={8}>
      <Grid container component="main" justify="center">
        <Grid item xs={12} sm={8} md={5}>
          <Typography component="h1" variant="h4">
            Create an account
          </Typography>

          <form className={styles.signup__form} onSubmit={classicSignUp}>
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
