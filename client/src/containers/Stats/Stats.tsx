import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';
import { fetchCompare } from 'api';
import ErrorCard from 'components/ErrorCard';
import Header from 'components/Header';
import isEqual from 'lodash/isEqual';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { EPages, getRoute } from 'types/routes';
import { IStore } from 'types/store';

import AverageDamage from './AverageDamage';
import Loader from './Loader';
import Probability from './Probability';

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
  const numFighters = useSelector((state: IStore) => state.fighters.length);

  useEffect(() => {
    dispatch(fetchCompare());
  }, [dispatch]);

  if (numFighters <= 0) {
    history.replace(getRoute(EPages.HOME));
  }

  const handleBack = () => {
    history.push(getRoute(EPages.HOME));
  };

  let placeholder: JSX.Element | null = null;
  if (stats.pending) {
    placeholder = <Loader />;
  } else if (stats.error) {
    placeholder = <ErrorCard />;
  }

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
      {placeholder || (
        <>
          <AverageDamage stats={stats} fighterNames={fighterNames} />
          <Probability stats={stats} fighterNames={fighterNames} />
        </>
      )}
    </div>
  );
};

export default Stats;
