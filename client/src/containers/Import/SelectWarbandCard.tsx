import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  selectWarbandCard: {
    margin: theme.spacing(2, 0, 2),
    paddingTop: theme.spacing(1),
    background: theme.palette.background.nested,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
}));

const SelectWarbandCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.selectWarbandCard}>
      <CardContent className={classes.content}>
        <Typography variant="h6">Select a Warband</Typography>
      </CardContent>
    </Card>
  );
};

export default SelectWarbandCard;
