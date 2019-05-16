import React, { Component } from 'react';
import Rikishi from './Mock-Rikishi.json';

export default class DataFetcher extends Component {
  constructor() {
    super()
    this.state = {
      list: null
    }
  }
  fetch = () => {
    var rikishiPromise = Promise.resolve(Rikishi);
    rikishiPromise.then(function (value) {

    })
  }
  render() {
    return (
      <div>
        {this.state.list === null ?
          this.fetch()
          : this.props.render(xxxxxxxxxx)}
      </div>
    )
  }
}
