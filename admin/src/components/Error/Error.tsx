import * as React from 'react';
import { Link } from 'react-router-dom';

/** material-ui */
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  text: {
    textAlign: 'center',
  },
}));

const Error = ({ errorText }: { errorText: 'string' }) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Typography variant="h2" component="h2" className={classes.text}>
        Oops!
      </Typography>
      <Typography variant="h4" component="h2" className={classes.text}>
        {errorText}
      </Typography>
      <Typography variant="h6" component="h2" className={classes.text}>
        <Link to="/">To main page</Link>
      </Typography>
    </Box>
  );
};

export default Error;
