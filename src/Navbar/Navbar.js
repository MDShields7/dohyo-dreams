import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import logo from "../assets/dohyo-logo-36h.png";
import Menu from "../assets/menu-dark.svg"
import MenuOn from "../assets/menu-light.svg"
import './Navbar.scss';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      toggleNav: false,
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
      <nav>
        {this.state.toggleNav ?
          <img className='menu' src={MenuOn} alt='menu icon' onClick={this.toggleNav} /> :
          <img className='menu' src={Menu} alt='menu icon' onClick={this.toggleNav} />
        }
        <div className='container'>
          <div className='row space-between'>

            <Link className="nav-logo" to="/">
              <img src={logo} alt="" />
            </Link>
            <span className={this.state.toggleNav ? 'show-2' : ''} onClick={this.toggleNav} />
            <section className={this.state.toggleNav ? 'show' : ''} onClick={this.toggleNav}>
              <ul>
                <li>
                  <Link className="nav-text" to="/admin"> Admin</Link>
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
