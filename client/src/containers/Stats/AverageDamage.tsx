import React, { useMemo } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { AverageDamageChart } from 'components/Charts';
import { AverageDamageTable } from 'components/Tables';
import { IStatsStore } from 'types/store';
import { Grid } from '@material-ui/core';
import CollapsibleCard from 'components/CollapsibleCard';
import { IAverageDamageData } from 'types/mappedStats';

const useStyles = makeStyles((theme: Theme) => ({
  averageDamageContainer: {
    margin: theme.spacing(0, 2, 2),
  },
}));

interface IAverageDamageProps {
  stats: IStatsStore;
  fighterNames: string[];
}
const AverageDamage = ({ stats, fighterNames }: IAverageDamageProps) => {
  const classes = useStyles();

  const averageDamageData = useMemo((): IAverageDamageData => {
    if (stats.pending || !stats.results) return [];
    return stats.results.map(({ toughness, metrics }) => ({ toughness, ...metrics.mean }));
  }, [stats.pending, stats.results]);

  console.log(fighterNames, averageDamageData);

  return (
    <CollapsibleCard title="Average Damage" className={classes.averageDamageContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <AverageDamageChart data={averageDamageData} series={fighterNames} />
        </Grid>
        <Grid item xs={12} md={6}>
          <AverageDamageTable data={averageDamageData} fighterNames={fighterNames} />
        </Grid>
      </Grid>
    </CollapsibleCard>
  );
};

export default AverageDamage;
