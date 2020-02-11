import { Collapse, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Warning } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  warning: {
    background: theme.palette.background.nested,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  warningTitle: {
    marginBottom: theme.spacing(0.5),
  },
}));

interface IWarningCardProps {
  warning?: string | null;
}
const WarningCard = ({ warning }: IWarningCardProps) => {
  const classes = useStyles();

  return (
    <Collapse in={Boolean(warning)}>
      <Paper className={classes.warning}>
        <Grid container spacing={2} alignItems="center" className={classes.warningTitle}>
          <Grid item>
            <Warning fontSize="large" />
          </Grid>
          <Grid item>
            <Typography variant="h6">Warning</Typography>
          </Grid>
        </Grid>
        <Typography>{warning}</Typography>
      </Paper>
    </Collapse>
  );
};

export default WarningCard;
