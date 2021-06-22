import React from 'react';

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import Cat from './components/Screen/Cat';

import "./App.scss";

function App() {


  return (
    <Router>
      <Switch>
        <Route path="/cat" exact component={Cat} />
        <Redirect to="/cat" />
      </Switch>
    </Router>


  );
}

export default App;
