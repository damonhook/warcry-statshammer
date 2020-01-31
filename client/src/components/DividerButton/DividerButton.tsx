import { Button, ButtonProps, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles(() => ({
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

const DividerButton = ({ className, children, ...other }: IDividerButtonProps) => {
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
