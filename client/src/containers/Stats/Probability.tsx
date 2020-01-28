import React, { useMemo } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ProbabilityChart } from 'components/Charts';
import { IStatsStore } from 'types/store';
import { Grid } from '@material-ui/core';
import CollapsibleCard from 'components/CollapsibleCard';
import { IProbabilitiesData } from 'types/mappedStats';

const useStyles = makeStyles((theme: Theme) => ({
  probabilityContainer: {
    margin: theme.spacing(0, 2, 2),
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

  console.log(fighterNames, probabilityData);

  return (
    <>
      <CollapsibleCard title="Cumulative Probability" className={classes.probabilityContainer}>
        <Grid container spacing={2}>
          {probabilityData.map(data => (
            <Grid item xs={12} sm={6}>
              <ProbabilityChart data={data} series={fighterNames} type="cumulative" />
            </Grid>
          ))}
        </Grid>
      </CollapsibleCard>
      <CollapsibleCard title="Discrete Probability" className={classes.probabilityContainer}>
        <Grid container spacing={2}>
          {probabilityData.map(data => (
            <Grid item xs={12} sm={6}>
              <ProbabilityChart data={data} series={fighterNames} type="discrete" />
            </Grid>
          ))}
        </Grid>
      </CollapsibleCard>
    </>
  );
};

export default Probability;
