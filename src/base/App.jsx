import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from '../pages/home/Home';

import GlobalStyle from './globalStyle';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
