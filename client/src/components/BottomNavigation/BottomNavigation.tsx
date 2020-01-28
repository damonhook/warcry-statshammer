import React, { useState, useRef, useEffect } from 'react';
import { BottomNavigation as Nav, BottomNavigationAction as NavItem } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Home as HomeIcon, Info as InfoIcon, BarChart as StatsIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { getRoute, EPages } from 'types/routes';
import { useRouteFind } from 'hooks';

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

  const handleChange = (event: any, newValue: number) => {
    history.push(routes[newValue]);
  };

  useEffect(() => {
    if (ref && ref.current) {
      setHeight(ref.current.clientHeight);
    }
  }, [ref]);

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
