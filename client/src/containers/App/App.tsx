import React from 'react';
import { ThemeProvider, makeStyles, Theme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import getTheme from 'themes';
import Home from 'containers/Home';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import { useSelector } from 'react-redux';
import { IStore } from 'types/store';
import { getRoute, EPages } from 'types/routes';
import BottomNavigation from 'components/BottomNavigation';
import AppBar from 'components/AppBar';
import About from 'containers/About';
import Stats from 'containers/Stats';
import Footer from 'components/Footer';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const App = () => {
  const classes = useStyles();
  const config = useSelector((state: IStore) => state.config);
  return (
    <Router>
      <ThemeProvider theme={getTheme(config)}>
        <DndProvider backend={Backend}>
          <CssBaseline />
          <div className={classes.root}>
            <AppBar />
            <Switch>
              <Route exact path={getRoute(EPages.HOME)} component={Home} />
              <Route exact path={getRoute(EPages.STATS)} component={Stats} />
              <Route exact path={getRoute(EPages.ABOUT)} component={About} />
              <Redirect to={getRoute(EPages.HOME)} />
            </Switch>
            <Footer />
            <BottomNavigation />
          </div>
        </DndProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
