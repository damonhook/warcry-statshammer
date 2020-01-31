import { Paper, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

import { ITooltipProps } from './Tooltips.types';

const useStyles = makeStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.graphs.tooltip,
    color: theme.palette.getContrastText(theme.palette.graphs.tooltip),
    padding: theme.spacing(1, 2),
  },
}));

interface IAverageDamageTooltipProps extends ITooltipProps {}

/**
 * A tooltip to display when you hover over a value in a graph
 */
const AverageDamageTooltip = ({ active = false, payload = [], label = '' }: IAverageDamageTooltipProps) => {
  const classes = useStyles();

  if (active) {
    return (
      <Paper className={classes.tooltip}>
        <Typography variant="h6">{`Toughness: T${label}`}</Typography>
        {(payload ?? []).map(({ color, name, value }) => (
          <Typography style={{ color }} key={name}>{`${name}: ${value}`}</Typography>
        ))}
      </Paper>
    );
  }
  return null;
};

export default AverageDamageTooltip;
