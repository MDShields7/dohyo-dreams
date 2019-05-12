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
    let currentState = this.state.toggleNav;
    this.setState({
      toggleNav: !currentState
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
            <section className={this.state.toggleNav ? 'show' : ''}>
              <ul>
                <li>
                  <Link className="nav-text" to="/about"> Admin</Link>
                </li>
                <li>
                  <Link className="nav-text" to="/about">About</Link>
                </li>
              </ul>
            </section>

          </div>
        </div>
      </nav >
    )
  }
}
