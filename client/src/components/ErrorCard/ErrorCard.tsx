import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ErrorOutline, Sync } from '@material-ui/icons';
import { fetchCompare } from 'api';
import React from 'react';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme: Theme) => ({
  errorCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    background: theme.palette.error.dark,
    '&:hover, &:focus, &:active': {
      background: theme.palette.error.main,
    },
    '&:focus, &:active': {
      background: theme.palette.error.light,
    },
    cursor: 'pointer',
  },
  errorHeader: {},
  errorIcon: {
    marginRight: theme.spacing(1),
  },
  retryIcon: {
    margin: theme.spacing(1, 0),
  },
}));

const ErrorCard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleRetry = () => {
    dispatch(fetchCompare());
  };

  return (
    <Card onClick={handleRetry} className={classes.errorCard}>
      <CardContent>
        <Typography variant="h4" component="div" className={classes.errorHeader}>
          <ErrorOutline className={classes.errorIcon} fontSize="inherit" />
          <Typography variant="h4" component="span">
            Error Fetching Stats
          </Typography>
        </Typography>
        <Typography>There was an error fetching stats from the server</Typography>
        <Typography variant="h1" component="div" className={classes.retryIcon}>
          <Sync fontSize="inherit" />
        </Typography>
        <Typography>Tap here to retry.</Typography>
        <Typography>If the issue persists, ensure that the fighter data is valid</Typography>
      </CardContent>
    </Card>
  );
};

export default ErrorCard;
