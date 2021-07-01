import * as React from 'react';
import { useState } from 'react';
import TitlesList from './TitlesList';
import SurveyMock from './SurveyMock';

import { Grid, Typography, Box, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// TEMP: recieved titles by Author id
const titlesMock = [
  'How do you feel about us?',
  'How do you feel about us? Test',
  'Can we contact you for more input?',
  'On a scale of 1 to 5, please evaluate',
  'On a scale of 0 to 10, how likely are you to recommend us to a friend or family member?',
  'That’s great! What do you like the most?',
  'Sorry to hear that :( Please tell us what happened',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dolores quos, reiciendis fugiat asperiores, omnis, earum excepturi facilis dolor eaque numquam sunt deserunt illo quisquam.',
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dashboard__paper: {
      flexGrow: 1,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '100%',
    },
    dashboard__title: {
      margin: theme.spacing(2),
    },
  })
);

const Dashboard = () => {
  const classes = useStyles();

  // TEMP: useState helper for simulation mockTitles updating
  const [newTitlesMock, setNewTitlesMock] = useState(titlesMock);

  // TEMP: helper mock function for simulation mockTitles updating
  const onEditSubmit = (newTitle: string, titleIndex: number) => {
    const titles = newTitlesMock.map((item, itemIndex) => {
      if (titleIndex === itemIndex) return newTitle;
      return item;
    });
    setNewTitlesMock(titles);
  };

  return (
    <Box mx={3}>
      <Typography
        component="h2"
        variant="h4"
        color="inherit"
        align="center"
        noWrap
        className={classes.dashboard__title}
      >
        Admin Dashboard
      </Typography>
      <Grid container component="main" justify="space-between" spacing={3}>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <Paper className={classes.dashboard__paper} elevation={6}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
            >
              Edit Titles
            </Typography>
            <TitlesList
              titlesMock={newTitlesMock}
              onEditSubmit={onEditSubmit} // TEMP: helper mock function
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <Paper className={classes.dashboard__paper} elevation={6}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
            >
              Survey Demo
            </Typography>
            {/* TEMP: helper mock Survey component */}
            <SurveyMock titlesMock={newTitlesMock} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
