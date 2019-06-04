import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import AboutAPI from './About/AboutAPI';
import Admin from './Admin/Admin';
import Api from './Api/Api';
import Navbar from './Navbar/Navbar';
import Banzuke from './Banzuke/Banzuke';
import './App.scss';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Navbar />
        {/* <div className='nav-void'></div> */}
        <Switch>
          <Route exact path='/' component={Api} />
          <Route path='/API' component={AboutAPI} />
          <Route path='/admin' component={Admin} />
          <Route path='/banzuke' component={Banzuke} />
        </Switch>

      </div>
    );
  }
}

export default App;
