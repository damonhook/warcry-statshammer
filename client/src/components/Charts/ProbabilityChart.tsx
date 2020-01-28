import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { IProbabilityData } from 'types/mappedStats';
import { Typography } from '@material-ui/core';
import { ProbabilityTooltip } from './Tooltips';
import { useIsMobile } from 'hooks';

const useStyles = makeStyles((theme: Theme) => ({
  chartContainer: {
    width: '100%',
    height: 300,
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(1),
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
}));

interface IProbabilityChartProps {
  data: IProbabilityData;
  series: string[];
  type?: 'discrete' | 'cumulative';
}
const ProbabilityChart = ({ data, series, type = 'cumulative' }: IProbabilityChartProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useIsMobile();

  const getTitle = () => {
    const typeTitle = type.replace(/^\w/, c => c.toUpperCase());
    const toughnessPrefix = mobile ? 'T' : 'Toughness ';
    return `${typeTitle} Probability ${toughnessPrefix}${data.toughness}`;
  };

  return (
    <div>
      <Typography variant="h6" className={classes.title}>
        {getTitle()}
      </Typography>
      <div className={classes.chartContainer}>
        <ResponsiveContainer>
          <LineChart data={data[type]}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.graphs.grid} />
            <XAxis stroke={theme.palette.graphs.axis} dataKey="damage" type="number" />
            <YAxis stroke={theme.palette.graphs.axis} />
            <Tooltip
              content={<ProbabilityTooltip type={type} />}
              cursor={{ fill: theme.palette.graphs.grid }}
            />
            <Legend />
            {series.map((key, index) => (
              <Line
                key={key}
                dataKey={key}
                connectNulls
                type="monotone"
                stroke={theme.palette.graphs.series[index]}
                dot={{ fill: theme.palette.background.paper, strokeWidth: 1, r: 1 }}
                activeDot={{ stroke: theme.palette.background.paper, strokeWidth: 2, r: 4 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProbabilityChart;
