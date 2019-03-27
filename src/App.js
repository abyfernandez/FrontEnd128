import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
    	<Router>
        <div>
          <Route exact="true" path="/login" component={Login} />
          <Route exact="true" path="/signup" component={Signup} />
          <Route exact="true" path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
