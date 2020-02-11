import { Button, Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';
import { fetchCompare } from 'api';
import ErrorCard from 'components/ErrorCard';
import Header from 'components/Header';
import ToughnessRangeConfig from 'components/ToughnessRangeConfig';
import { useIsMobile } from 'hooks';
import isEqual from 'lodash/isEqual';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IStore } from 'types/store';
import { ROUTES } from 'utils/urls';

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
  const toughnessConfig = useSelector((state: IStore) => state.config.toughnessRange);
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const mobile = useIsMobile();

  useEffect(() => {
    dispatch(fetchCompare());
  }, [dispatch, toughnessConfig]);

  if (numFighters <= 0) {
    history.replace(ROUTES.HOME);
  }

  const handleBack = () => {
    history.push(ROUTES.HOME);
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
          <Grid container spacing={mobile ? 2 : 3} alignItems="center">
            <Grid item>
              <ToughnessRangeConfig />
            </Grid>
            {!xs && (
              <Grid item>
                <Button startIcon={<ArrowBack />} onClick={handleBack}>
                  Fighters
                </Button>
              </Grid>
            )}
          </Grid>
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
