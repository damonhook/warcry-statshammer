import { Button, makeStyles } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import Header from 'components/Header';
import Fighters from 'containers/Fighters';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'utils/urls';

const useStyles = makeStyles(() => ({
  home: {
    flex: 1,
  },
}));

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleForward = () => {
    history.push(ROUTES.STATS);
  };

  return (
    <div className={classes.home}>
      <Header
        text="Fighters"
        endActions={(
          <Button onClick={handleForward} startIcon={<ArrowForward />}>
            Stats
          </Button>
        )}
      />
      <Fighters />
    </div>
  );
};

export default Home;
