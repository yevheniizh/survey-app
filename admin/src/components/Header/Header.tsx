import * as React from 'react';

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
import app from '../../services/firebase.service';

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

export default function Header({
  currentUser,
}: {
  currentUser: any;
}): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography component="h2" variant="h5" color="inherit" noWrap>
            Title
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
}
