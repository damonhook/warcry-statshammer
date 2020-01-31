import { Card } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  listItem: {
    padding: theme.spacing(2),
  },
}));

interface IListItemProps {
  className?: string;
  children?: React.ReactNode;
}

const ListItem = ({ children, className }: IListItemProps) => {
  const classes = useStyles();

  return <Card className={clsx(classes.listItem, className)}>{children}</Card>;
};

export default ListItem;
