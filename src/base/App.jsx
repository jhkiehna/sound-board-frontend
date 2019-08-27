import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from '../pages/home/Home';

import GlobalStyle from './globalStyle';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = false;

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/boards" component={() => <div>Boards</div>} />
          <PrivateRoute exact path="/clips" component={() => <div>Clips</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
