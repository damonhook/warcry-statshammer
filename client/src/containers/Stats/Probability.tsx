import { Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ProbabilityChart } from 'components/Charts';
import CollapsibleCard from 'components/CollapsibleCard';
import React, { useMemo } from 'react';
import { IProbabilitiesData } from 'types/mappedStats';
import { IStatsStore } from 'types/store';

const useStyles = makeStyles((theme: Theme) => ({
  probabilityContainer: {
    marginBottom: theme.spacing(2),
  },
}));

interface IProbabilityProps {
  stats: IStatsStore;
  fighterNames: string[];
}
const Probability = ({ stats, fighterNames }: IProbabilityProps) => {
  const classes = useStyles();

  const probabilityData = useMemo((): IProbabilitiesData => {
    if (stats.pending || !stats.results) return [];
    return stats.results.map(({ toughness, discrete, cumulative }) => ({ toughness, discrete, cumulative }));
  }, [stats.pending, stats.results]);

  return (
    <>
      <CollapsibleCard title="Cumulative Probability" className={classes.probabilityContainer}>
        <Grid container spacing={2}>
          {probabilityData.map(data => (
            <Grid item xs={12} md={6} key={data.toughness}>
              <ProbabilityChart data={data} series={fighterNames} type="cumulative" />
            </Grid>
          ))}
        </Grid>
      </CollapsibleCard>
      <CollapsibleCard title="Discrete Probability" className={classes.probabilityContainer}>
        <Grid container spacing={2}>
          {probabilityData.map(data => (
            <Grid item xs={12} md={6} key={data.toughness}>
              <ProbabilityChart data={data} series={fighterNames} type="discrete" />
            </Grid>
          ))}
        </Grid>
      </CollapsibleCard>
    </>
  );
};

export default Probability;
