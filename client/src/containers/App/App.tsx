import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from 'components/AppBar';
import BottomNavigation from 'components/BottomNavigation';
import Footer from 'components/Footer';
import LeftNavigation from 'components/LeftNavigation';
import Notifications from 'components/Notifications';
import About from 'containers/About';
import Home from 'containers/Home';
import Stats from 'containers/Stats';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { getTheme } from 'themes';
import { EPages, getRoute } from 'types/routes';
import { IStore } from 'types/store';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',
  },
  inner: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    width: '100%',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    flex: 1,
    width: '100%',
    maxWidth: 1600,
  },
}));

const App = () => {
  const classes = useStyles();
  const config = useSelector((state: IStore) => state.config);
  return (
    <Router>
      <ThemeProvider theme={getTheme(config)}>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar />
          <div className={classes.inner}>
            <LeftNavigation />
            <div className={classes.contentWrapper}>
              <div className={classes.content}>
                <Switch>
                  <Route exact path={getRoute(EPages.HOME)} component={Home} />
                  <Route exact path={getRoute(EPages.STATS)} component={Stats} />
                  <Route exact path={getRoute(EPages.ABOUT)} component={About} />
                  <Redirect to={getRoute(EPages.HOME)} />
                </Switch>
              </div>
              <Footer />
            </div>
          </div>
          <Notifications />
          <BottomNavigation />
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
