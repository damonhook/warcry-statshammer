import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    padding: theme.spacing(2, 0),
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

interface IHeaderProps {
  text: string;
  endActions?: React.ReactNode;
}
const Header = ({ text, endActions }: IHeaderProps) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Typography variant="h5" component="h2">
        {text}
      </Typography>
      <div>{endActions}</div>
    </div>
  );
};

export default Header;
