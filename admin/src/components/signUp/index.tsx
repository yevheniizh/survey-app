import * as React from 'react';
import { useCallback, useContext } from 'react';
import { MyContext } from '../..';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/consts';
import styles from './styles.module.css';

import { Box, Grid, Button, Typography, TextField } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const SignUp = ({ history }: { history: any }) => {
  const { auth } = useContext(MyContext);

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await auth.createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [auth, history]
  );

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
