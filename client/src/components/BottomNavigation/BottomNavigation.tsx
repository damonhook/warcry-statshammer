import { BottomNavigation as Nav, BottomNavigationAction as NavItem } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { BarChart as StatsIcon, Home as HomeIcon, Info as InfoIcon } from '@material-ui/icons';
import { useBreakpointChanged, useRouteFind } from 'hooks';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { EPages, getRoute } from 'types/routes';

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
}));

const BottomNavigation = () => {
  const history = useHistory();
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const classes = useStyles({ height });

  const routes = [getRoute(EPages.HOME), getRoute(EPages.STATS), getRoute(EPages.ABOUT)];
  const [index] = useRouteFind(routes);

  const breakpoints = useBreakpointChanged();

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
          <NavItem label="Home" icon={<HomeIcon />} />
          <NavItem label="Stats" icon={<StatsIcon />} />
          <NavItem label="About" icon={<InfoIcon />} />
        </Nav>
      </div>
    </>
  );
};

export default BottomNavigation;
