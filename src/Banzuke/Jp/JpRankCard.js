import React, { Component } from 'react'
import 'sumo-rank'


export default class JpRankCard extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  // componentDidMount() {
  //   let { data } = this.props;
  //   // let data = { img: 100 };
  //   let newData;
  //   console.log('over', data.img > 9)
  //   if (data && data.img > 9) {
  //     newData = 'blank'
  //   } else {
  //     newData = data.img;
  //   }
  //   console.log('newData', newData)
  //   // console.log('newData', newData, '../../assets/rikishi-img/' + newData + '.jpg')
  // }
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
          <p className='text-xxs'>Name:</p>
          <p className='text-xs-b'><b>{data.name}</b></p>
        </div>
        <img className='text-xs avatar' src={this.findAvatar()} alt="" />
      </div>
    )

  }
}
