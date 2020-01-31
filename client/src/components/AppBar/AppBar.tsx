import React, { useRef, useEffect, useState } from 'react';
import { AppBar as Bar, Toolbar, Typography, useScrollTrigger, Slide, IconButton } from '@material-ui/core';
import { BrightnessMedium as BrightnessMediumIcon } from '@material-ui/icons';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { config as configStore } from 'store/slices';
import { getRoute, EPages } from 'types/routes';
import Link from 'components/Link';

interface IStyleProps {
  height: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    background: theme.palette.primary.dark,
  },
  offset: ({ height }: IStyleProps) => ({
    marginTop: height,
  }),
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    padding: theme.spacing(2, 0),
  },
  action: {
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
}));

const AppBar = () => {
  const [height, setHeight] = useState(0);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const classes = useStyles({ height });
  const trigger = useScrollTrigger();

  useEffect(() => {
    if (ref && ref.current) {
      setHeight(ref.current.clientHeight);
    }
  }, [ref]);

  const handleDarkModeToggle = () => {
    dispatch(configStore.actions.toggleDarkMode());
  };

  return (
    <div>
      <Slide appear={false} direction="down" in={!trigger}>
        <Bar className={classes.appBar}>
          <div ref={ref}>
            <Toolbar variant="dense" className={classes.toolbar}>
              <Link to={getRoute(EPages.HOME)}>
                <Typography variant="h5" component="h1" className={classes.title}>
                  Warcry Statshammer
                </Typography>
              </Link>
              <span>
                <IconButton onClick={handleDarkModeToggle} className={classes.action}>
                  <BrightnessMediumIcon />
                </IconButton>
              </span>
            </Toolbar>
          </div>
        </Bar>
      </Slide>
      <div className={classes.offset} />
    </div>
  );
};

export default AppBar;