import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Add } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from 'types/store';
import { fighters as fightersStore } from 'store/slices';
import Fighter from 'components/Fighter';
import appConfig from 'appConfig';

const useStyles = makeStyles((theme: Theme) => ({
  fighters: {
    padding: theme.spacing(0, 2, 2),
  },
}));

const Fighters = () => {
  const classes = useStyles();
  const fighters = useSelector((state: IStore) => state.fighters);
  const dispatch = useDispatch();

  const handleAddFighter = () => {
    dispatch(fightersStore.actions.addFighter());
  };

  const isAddFighterDisabled = fighters.length >= appConfig.limits.fighters;

  return (
    <div className={classes.fighters}>
      {fighters.map((fighter, index) => (
        <Fighter fighter={fighter} index={index} key={fighter.uuid ?? index} />
      ))}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleAddFighter}
        disabled={isAddFighterDisabled}
        startIcon={<Add />}
      >
        Add a Fighter
      </Button>
    </div>
  );
};

export default Fighters;
