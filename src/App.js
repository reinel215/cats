import React from 'react';

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import Cat from './components/Screen/Cat';
import Signup from './components/Screen/Signup';
import Signin from './components/Screen/Signin';
import "./App.scss";



function App() {


  return (
    <Router>
      <Switch>
        <Route path="/cat" exact component={Cat} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Redirect to="/signin" />
      </Switch>
    </Router>


  );
}

export default App;
