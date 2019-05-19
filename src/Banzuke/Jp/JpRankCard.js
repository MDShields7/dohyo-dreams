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
    console.log('this.props', this.props)
    console.log('data', data)
    const img = require('../../assets/rikishi-img/' + data.img + '.jpg')
    return (
      <div >

        <img src={img} alt="" />
        <div>{data.name}</div>
      </div>
    )

  }
}
