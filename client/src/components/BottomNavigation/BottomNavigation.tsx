import React, { useState, useRef, useEffect } from 'react';
import { BottomNavigation as Nav, BottomNavigationAction as NavItem } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Home as HomeIcon, Info as InfoIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { getRoute, EPages } from 'types/routes';

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
    // [theme.breakpoints.up('md')]: {
    //   display: 'none',
    // },
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

  useEffect(() => {
    if (ref && ref.current) {
      console.log(ref.current.clientHeight);
      setHeight(ref.current.clientHeight);
    }
  }, [ref]);

  const handleHomeClicked = () => {
    history.push(getRoute(EPages.HOME));
  };

  const handleAboutClicked = () => {
    history.push(getRoute(EPages.ABOUT));
  };

  return (
    <>
      <div className={classes.offset} />
      <div ref={ref} className={classes.nav}>
        <Nav showLabels>
          <NavItem label="Home" icon={<HomeIcon />} onClick={handleHomeClicked} />
          <NavItem label="About" icon={<InfoIcon />} onClick={handleAboutClicked} />
        </Nav>
      </div>
    </>
  );
};

export default BottomNavigation;
