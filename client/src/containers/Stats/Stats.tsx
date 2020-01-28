import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header';
import { fetchCompare } from 'api';
import { IStore } from 'types/store';
import isEqual from 'lodash/isEqual';
import AverageDamage from './AverageDamage';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { getRoute, EPages } from 'types/routes';
import { ArrowBack } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  stats: {
    flex: 1,
  },
}));

const Stats = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const stats = useSelector((state: IStore) => state.stats, isEqual);
  const fighterNames = useSelector((state: IStore) => [...new Set(state.fighters.map(f => f.name))], isEqual);

  useEffect(() => {
    dispatch(fetchCompare());
  }, [dispatch]);

  const handleBack = () => {
    history.push(getRoute(EPages.HOME));
  };

  return (
    <div className={classes.stats}>
      <Header
        text="Stats"
        endActions={
          <Button startIcon={<ArrowBack />} onClick={handleBack}>
            Fighters
          </Button>
        }
      />
      {!stats.pending && stats.results && <AverageDamage stats={stats} fighterNames={fighterNames} />}
    </div>
  );
};

export default Stats;
