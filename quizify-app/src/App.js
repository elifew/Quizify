import React from'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import login_index from './Components/login/login_index';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <Router>
      <Navigation/> {/* this is a temporary navigational component*/}
      
        <Route exact path="/" component={login_index}></Route>

        {/* This is where all of the paths to each different page will go*/}
      
    </Router>
  );
}

export default App;
