import React, { Component } from 'react'
import Mawashi from '../Mawashi'
import 'sumo-rank'


export default class JpRankCard extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  findAvatar = () => {
    let { data } = this.props;
    let newData;
    let img;
    if (data && data.img > 9) {
      newData = 'blank'
    } else {
      newData = data.img;
    }
    return img = require(`../../assets/rikishi-img/${newData}.jpg`)
  }
  render() {
    const { data } = this.props;
    return (
      <div className='row row-btw'>
        <div className=''>
          <Mawashi className='mawashi' color={data.mawashi} />
          <p className='text-xxs'>Name:</p>
          <p className='text-xs-b'><b>{data.name}</b></p>

        </div>
        <img className='text-xs avatar' src={this.findAvatar()} alt="" />
      </div>
    )

  }
}
