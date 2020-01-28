import React from 'react';
import { Table, TableHead, Paper, TableCell, TableBody, TableRow, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { IAverageDamageData } from 'types/mappedStats';

const useStyles = makeStyles((theme: Theme) => ({
  averageDamageTable: {
    maxWidth: '100%',
  },
  table: {
    overflowX: 'scroll',
    background: theme.palette.background.nested,
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(1),
  },
  header: {
    fontWeight: theme.typography.fontWeightBold,
  },
  sticky: {
    position: 'sticky',
    left: 0,
    zIndex: 11,
    backgroundColor: theme.palette.background.nested,
  },
}));

interface IAverageDamageTableProps {
  data: IAverageDamageData;
  fighterNames: string[];
  className?: string;
}
const AverageDamageTable = ({ data, fighterNames, className }: IAverageDamageTableProps) => {
  const classes = useStyles();
  return (
    <div className={classes.averageDamageTable}>
      <Typography variant="h6" className={classes.title}>
        Average Damage Per Toughness
      </Typography>
      <Paper className={classes.table}>
        <Table>
          <TableHead>
            <TableCell className={clsx(classes.sticky, classes.header)}></TableCell>
            {data.map(({ toughness }) => (
              <TableCell className={classes.header}>{`T${toughness}`}</TableCell>
            ))}
          </TableHead>
          <TableBody>
            {fighterNames.map(name => (
              <TableRow key={name}>
                <TableCell className={classes.sticky}>{name}</TableCell>
                {data.map(({ toughness, [name]: result }) => (
                  <TableCell key={toughness}>{result}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default AverageDamageTable;
