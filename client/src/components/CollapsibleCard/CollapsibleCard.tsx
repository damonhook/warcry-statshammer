import React, { useState } from 'react';
import { Card, CardContent, Typography, Collapse } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    cursor: 'pointer',
    padding: theme.spacing(1.5, 2),
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

interface ICollapsibleCardProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}
const CollapsibleCard = ({ title, children, className }: ICollapsibleCardProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Card className={className}>
      <div className={classes.header} onClick={handleClick}>
        <Typography variant="h6">{title}</Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <CardContent>{children}</CardContent>
      </Collapse>
    </Card>
  );
};

export default CollapsibleCard;
