import { Divider, Drawer, Tab, Tabs } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { BarChart as StatsIcon, Home as HomeIcon, Info as InfoIcon } from '@material-ui/icons';
import Link from 'components/Link';
import Logo from 'components/Logo';
import Version from 'components/Version';
import { useRouteFind } from 'hooks';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { EPages, getRoute } from 'types/routes';
import { IStore } from 'types/store';

const useStyles = makeStyles((theme: Theme) => ({
  leftNavigation: {
    width: theme.mixins.drawer.width,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    width: theme.mixins.drawer.width,
  },
  drawerLogo: {
    padding: theme.spacing(0.5),
    width: theme.mixins.drawer.width,
    textAlign: 'center',
  },
  caption: {
    textAlign: 'end',
    padding: theme.spacing(1),
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: '100%',
    width: theme.mixins.drawer.width,
  },
}));

const LeftNavigation = () => {
  const classes = useStyles();
  const history = useHistory();
  const [index, setIndex] = useState(0);

  const routes = [getRoute(EPages.HOME), getRoute(EPages.STATS), getRoute(EPages.ABOUT)];
  const [routeIndex] = useRouteFind(routes);

  const numFighters = useSelector((state: IStore) => state.fighters.length);

  useEffect(() => {
    setIndex(routeIndex);
  }, [routeIndex]);

  const handleChange = (event: any, newValue: number) => {
    setIndex(newValue);
    history.push(routes[newValue]);
  };

  return (
    <div className={classes.leftNavigation}>
      <Drawer open variant="permanent" anchor="left" className={classes.drawer}>
        <Link to={getRoute(EPages.HOME)} className={classes.drawerLogo}>
          <Logo height={60} />
        </Link>
        <Divider variant="middle" />
        <Tabs
          orientation="vertical"
          value={index}
          onChange={handleChange}
          className={classes.tabs}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          TabIndicatorProps={{
            style: { display: 'none' },
          }}
        >
          <Tab label="Home" icon={<HomeIcon />} />
          <Tab label="Stats" icon={<StatsIcon />} disabled={numFighters <= 0} />
          <Tab label="About" icon={<InfoIcon />} />
        </Tabs>
        <Version includePrefixText={false} />
      </Drawer>
    </div>
  );
};

export default LeftNavigation;
