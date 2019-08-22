import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "../pages/home/Home";

import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
