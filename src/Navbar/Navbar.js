import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import logo from "../assets/dohyo-logo-36h.png"
import './Navbar.scss';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='nav'>
        <div className='container'>
          <div className='row'>
            <Link className="nav-logo nav-text" to="/">
              <img src={logo} alt="" />
            </Link>
            <div className='nav-item nav-right'>
              {/* <div><Link to="/about">ABOUT</Link></div> */}
              <div>
                <Link className="nav-text" to="/api">API</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
