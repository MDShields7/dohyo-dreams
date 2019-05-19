import React, { Component } from 'react'
import JpRankList from './Jp/JpRankList'
import UsRankList from './Us/UsRankList'
import './Banzuke.scss'


export default class Banzuke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeNum: 0,
      listType: [
        <JpRankList />,
        <UsRankList />
      ]
    }
  }

  render() {
    const { typeNum, listType } = this.state;
    return (
      // <div className='container'>
      <div >
        <h1 className='nav-color'>
          <div className='container'> Banzuke
          </div>
        </h1>
        {listType[typeNum]}
      </div>
    )
  }
}
