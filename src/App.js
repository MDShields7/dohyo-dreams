import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import About from './About/About';
import Admin from './Admin/Admin';
import Api from './Api/Api';
import Navbar from './Navbar/Navbar';
import './App.scss';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Navbar />
        <div className='nav-void'></div>
        <Switch>
          <Route exact path='/' component={Api} />
          <Route path='/about' component={About} />
          <Route path='/admin' component={Admin} />
        </Switch>

      </div>
    );
  }
}

export default App;
