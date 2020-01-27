import React from 'react';
import Fighters from 'containers/Fighters';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  home: {
    flex: 1,
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Fighters />
    </div>
  );
};

export default Home;
