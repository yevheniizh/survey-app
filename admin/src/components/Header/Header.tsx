import * as React from 'react';
import app from '../../services/firebase.service';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import {
  Toolbar,
  Button,
  IconButton,
  Typography,
  AppBar,
  Box,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(2),
    },
    auth: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext); // current user data

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography component="h2" variant="h5" color="inherit" noWrap>
            Survey
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <SearchIcon />
          </IconButton>
          <Box className={classes.auth}>
            {currentUser?.displayName || 'User'}
            <Button
              color="inherit"
              size="small"
              variant="outlined"
              onClick={() => app.auth().signOut()}
              className={classes.menuButton}
            >
              Sign out
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
