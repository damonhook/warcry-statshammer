import React from 'react';
import { CircularProgress, Typography, Paper } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  loader: {
    padding: theme.spacing(2),
    height: 300,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.loader}>
      <CircularProgress size={92} />
      <Typography variant="h6">Loading...</Typography>
    </Paper>
  );
};

export default Loader;
