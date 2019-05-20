import React, { Component } from 'react'
import 'sumo-rank'


export default class JpRankCard extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    const { data } = this.props;
    const img = require('../../assets/rikishi-img/' + data.img + '.jpg')
    return (
      <div >

        <img src={img} alt="" />
        <p>{data.name}</p>
      </div>
    )

  }
}
