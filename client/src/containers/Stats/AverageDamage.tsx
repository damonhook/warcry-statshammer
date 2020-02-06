import { Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { AverageDamageChart } from 'components/Charts';
import CollapsibleCard from 'components/CollapsibleCard';
import { AverageDamageTable } from 'components/Tables';
import React, { useMemo } from 'react';
import { IAverageDamageData } from 'types/mappedStats';
import { IStatsStore } from 'types/store';

const useStyles = makeStyles((theme: Theme) => ({
  averageDamageContainer: {
    marginBottom: theme.spacing(2),
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
