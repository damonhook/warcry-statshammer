import React, { useRef, useEffect, useState } from 'react';
import {
  AppBar as Bar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  IconButton,
  Icon,
} from '@material-ui/core';
import { BrightnessMedium as BrightnessMediumIcon } from '@material-ui/icons';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { config as configStore } from 'store/slices';

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
}));

const AppBar: React.FC = () => {
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
              <Typography variant="h5" component="h1" className={classes.title}>
                Warcry Statshammer
              </Typography>
              <span>
                <IconButton onClick={handleDarkModeToggle}>
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
