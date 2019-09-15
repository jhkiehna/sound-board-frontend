import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { AuthProvider, AuthContext } from '../utils/AuthContext';
import Home from '../pages/home/Home';

import GlobalStyle from './globalStyle';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [authenticated, setAuthenticated] = React.useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
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
      <AuthProvider>
        <CssBaseline />
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/boards" component={() => <div>Boards</div>} />
            <PrivateRoute exact path="/clips" component={() => <div>Clips</div>} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
