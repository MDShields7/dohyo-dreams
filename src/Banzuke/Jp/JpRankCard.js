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
      <div className='row row-btw'>
        <div className='text-xs'>{data.name}</div>
        <img className='text-xs avatar' src={img} alt="" />
      </div>
    )

  }
}
