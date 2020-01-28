import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import { ITooltipProps } from './Tooltips.types';

const useStyles = makeStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.graphs.tooltip,
    color: theme.palette.getContrastText(theme.palette.graphs.tooltip),
    padding: theme.spacing(1, 2),
  },
}));

interface IProbabilityTooltipProps extends ITooltipProps {
  type: 'discrete' | 'cumulative';
}

/**
 * A tooltip to display when you hover over a value in a graph
 */
const ProbabilityTooltip = ({ active = false, payload = [], label = '', type }: IProbabilityTooltipProps) => {
  const classes = useStyles();
  console.log(payload);

  if (active) {
    return (
      <Paper className={classes.tooltip}>
        <Typography variant="h6">{`Damage: ${type === 'cumulative' ? '<= ' : ''}${label}`}</Typography>
        {(payload ?? []).map(({ color, name, value }) => (
          <Typography style={{ color }} key={name}>{`${name}: ${value}%`}</Typography>
        ))}
      </Paper>
    );
  }
  return null;
};

export default ProbabilityTooltip;
