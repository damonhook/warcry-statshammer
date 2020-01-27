import React from 'react';
import { Button, Divider, ButtonProps } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  dividerButton: {
    display: 'flex',
    alignItems: 'center',
  },
  divider: {
    flex: 1,
  },
}));

interface IDividerButtonProps extends ButtonProps {
  className?: string;
}

const DividerButton: React.FC<IDividerButtonProps> = ({ className, children, ...other }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.dividerButton, className)}>
      <Divider className={classes.divider} />
      <Button {...other}>{children}</Button>
      <Divider className={classes.divider} />
    </div>
  );
};

export default DividerButton;
