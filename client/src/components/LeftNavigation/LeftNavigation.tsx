import { Tab, Tabs } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { BarChart as StatsIcon, Home as HomeIcon, Info as InfoIcon } from '@material-ui/icons';
import { useRouteFind } from 'hooks';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { EPages, getRoute } from 'types/routes';

const useStyles = makeStyles((theme: Theme) => ({
  leftNavigation: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: '100%',
  },
}));

const LeftNavigation = () => {
  const classes = useStyles();
  const history = useHistory();
  const [index, setIndex] = useState(0);

  const routes = [getRoute(EPages.HOME), getRoute(EPages.STATS), getRoute(EPages.ABOUT)];
  const [routeIndex] = useRouteFind(routes);

  useEffect(() => {
    setIndex(routeIndex);
  }, [routeIndex]);

  const handleChange = (event: any, newValue: number) => {
    setIndex(newValue);
    // This is done so that the indicator can finish moving before loading the next page
    // This ensures that the animation is smooth
    setTimeout(() => {
      history.push(routes[newValue]);
    }, 120);
  };

  return (
    <div className={classes.leftNavigation}>
      <Tabs
        orientation="vertical"
        value={index}
        onChange={handleChange}
        className={classes.tabs}
        indicatorColor="primary"
      >
        <Tab label="Home" icon={<HomeIcon />} />
        <Tab label="Stats" icon={<StatsIcon />} />
        <Tab label="About" icon={<InfoIcon />} />
      </Tabs>
    </div>
  );
};

export default LeftNavigation;
