import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useIsMobile } from 'hooks';
import React from 'react';
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
  const mobile = useIsMobile();

  const getSize = () => {
    return mobile ? 'small' : 'medium';
  };

  return (
    <div className={clsx(classes.averageDamageTable, className)}>
      <Typography variant="h6" className={classes.title}>
        Average Damage Per Toughness
      </Typography>
      <Paper className={classes.table}>
        <Table size={getSize()}>
          <TableHead>
            <TableRow>
              <TableCell className={clsx(classes.sticky, classes.header)} />
              {data.map(({ toughness }) => (
                <TableCell className={classes.header} key={toughness}>{`T${toughness}`}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {fighterNames.map((name) => (
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
