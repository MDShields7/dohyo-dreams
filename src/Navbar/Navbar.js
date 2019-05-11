import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import logo from "../assets/dohyo-logo-36h.png"
import './Navbar.scss';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      toggleNav: false
    }
  }
  toggleNav = () => {
    this.setState({
      toggleNav: !this.state.toggleMenu
    })
  }
  render() {
    return (
      <nav className='nav'>
        <button onClick={this.toggleNav}></button>
        <div className='container'>
          <div className='row space-between'>

            <Link className="nav-logo" to="/">
              <img src={logo} alt="" />
            </Link>

            <div className='nav-links'>
              <div>
                <Link className="nav-text" to="/about">Admin</Link>
              </div>
              <div>
                <Link className="nav-text" to="/about">About</Link>
              </div>
            </div>

          </div>
        </div>
      </nav >
    )
  }
}
