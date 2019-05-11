import React, { Component } from 'react';
import Crud from './Crud/Crud';
import './Api.scss';

export default class Api extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Sumo API Documentation</h1>
        <Crud />
      </div>
    )
  }
}
