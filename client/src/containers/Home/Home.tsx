import React from 'react';
import Fighters from 'containers/Fighters';
import { makeStyles, Button } from '@material-ui/core';
import Header from 'components/Header';
import { ArrowForward } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { getRoute, EPages } from 'types/routes';

const useStyles = makeStyles(() => ({
  home: {
    flex: 1,
  },
}));

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleForward = () => {
    history.push(getRoute(EPages.STATS));
  };

  return (
    <div className={classes.home}>
      <Header
        text="Fighters"
        endActions={
          <Button onClick={handleForward} startIcon={<ArrowForward />}>
            Stats
          </Button>
        }
      />
      <Fighters />
    </div>
  );
};

export default Home;
