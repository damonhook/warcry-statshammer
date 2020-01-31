import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { IDamage } from 'types/fighter';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  damageField: {
    display: 'flex',
    alignItems: 'center',
  },
  separator: {
    padding: theme.spacing(0.5),
  },
  field: {
    flex: 1,
  },
}));

interface IDamageFieldProps {
  damage: IDamage;
  setDamage: (newDamage: IDamage) => void;
  className?: string;
}

const DamageField = ({ damage, setDamage, className }: IDamageFieldProps) => {
  const classes = useStyles();

  const handleHitChanged = (event: any) => {
    setDamage({ ...damage, hit: event.target.value });
  };

  const handleCritChanged = (event: any) => {
    setDamage({ ...damage, crit: event.target.value });
  };

  return (
    <div className={clsx(classes.damageField, className)}>
      <TextField
        label="Hit"
        variant="filled"
        value={damage.hit}
        onChange={handleHitChanged}
        className={classes.field}
        size="small"
        type="number"
      />
      <Typography className={classes.separator} variant="h4">
        /
      </Typography>
      <TextField
        label="Crit"
        variant="filled"
        value={damage.crit}
        onChange={handleCritChanged}
        className={classes.field}
        size="small"
        type="number"
      />
    </div>
  );
};

export default DamageField;
