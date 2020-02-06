import { Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  version: {
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'flex-end',
    color: grey[500],
  },
}));

interface IVersionProps {
  className?: string;
  includePrefixText?: boolean;
}
const Version = ({ className, includePrefixText = true }: IVersionProps) => {
  const classes = useStyles();

  return (
    <div className={className}>
      {process.env.REACT_APP_VERSION && (
        <Typography variant="caption" className={classes.version}>
          {`${includePrefixText ? 'Current Version: ' : ''}v${process.env.REACT_APP_VERSION}`}
        </Typography>
      )}
    </div>
  );
};

export default Version;
