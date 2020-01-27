import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import getTheme from 'themes';
import Home from 'containers/Home';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import { useSelector } from 'react-redux';
import { IStore } from 'types/store';

const App = () => {
  const config = useSelector((state: IStore) => state.config);
  return (
    <Router>
      <ThemeProvider theme={getTheme(config)}>
        <DndProvider backend={Backend}>
          {/* <DndProvider
          backend={TouchBackend}
          options={{
            enableMouseEvents: true,
          }}
        > */}
          <CssBaseline />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          {/* </DndProvider> */}
        </DndProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
