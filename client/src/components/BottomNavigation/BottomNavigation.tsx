import { BottomNavigation as Nav, BottomNavigationAction as NavItem } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { BarChart as StatsIcon, Home as HomeIcon, Info as InfoIcon } from '@material-ui/icons';
import { useBreakpointChanged, useRouteFind } from 'hooks';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { EPages, getRoute } from 'types/routes';
import { IStore } from 'types/store';

interface IStyleProps {
  height: number;
}
const useStyles = makeStyles((theme: Theme) => ({
  nav: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.appBar,
    boxShadow: theme.palette.type === 'dark' ? theme.shadows[20] : theme.shadows[10],
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  offset: ({ height }: IStyleProps) => ({
    marginTop: height,
  }),
  item: {
    '&:disabled': {
      color: theme.palette.action.disabledBackground,
    },
  },
}));

const BottomNavigation = () => {
  const history = useHistory();
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const classes = useStyles({ height });

  const routes = [getRoute(EPages.HOME), getRoute(EPages.STATS), getRoute(EPages.ABOUT)];
  const [index] = useRouteFind(routes);

  const breakpoints = useBreakpointChanged();
  const numFighters = useSelector((state: IStore) => state.fighters.length);

  const handleChange = (event: any, newValue: number) => {
    history.push(routes[newValue]);
  };

  useEffect(() => {
    setTimeout(() => {
      if (ref && ref.current) {
        setHeight(ref.current.clientHeight);
      }
    }, 150);
  }, [ref, breakpoints]);

  return (
    <>
      <div className={classes.offset} />
      <div ref={ref} className={classes.nav}>
        <Nav showLabels value={index} onChange={handleChange}>
          <NavItem className={classes.item} label="Home" icon={<HomeIcon />} />
          <NavItem className={classes.item} label="Stats" icon={<StatsIcon />} disabled={numFighters <= 0} />
          <NavItem className={classes.item} label="About" icon={<InfoIcon />} />
        </Nav>
      </div>
    </>
  );
};

export default BottomNavigation;
