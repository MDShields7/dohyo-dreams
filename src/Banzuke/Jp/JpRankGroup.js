import React, { Component } from 'react'
import JpRankCard from './JpRankCard'
import './JpRankList.scss'

export default class JpRankGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      w1: this.props.w1,
      w1Index: this.props.w1Index,
      rank: this.props.rank,
      w2: this.props.w2,
      w2Index: this.props.w2Index,
      sIndex: this.props.sIndex
    }
  }
  render() {
    const { inspect } = this.props;
    const { w1Index, rank, w2Index, sIndex } = this.state;
    let { w1, w2 } = this.state;
    // w1 = Object.assign(w1, { key: w1Index })
    // if (w2 && w2Index) {
    //   w2 = Object.assign(w2, { key: w2Index })
    // }
    const infoEast = (w1 === sIndex ? "info-east" : "info-hide")
    const infoWest = (w1 === sIndex ? "info-west" : "info-hide")
    console.log('rankGroup key', w1Index)
    return (
      <div className='row'>
        <div className='direction' onClick={() => inspect(w1Index)}>
          <JpRankCard data={w1} inspect={this.props.inspect} />
        </div>
        <div className='rank'>
          {rank}
        </div>
        <div className='direction' onClick={() => inspect(w2Index)}>
          {w2 && w2Index ? <JpRankCard data={w2} oinspect={this.props.inspect} /> : <div></div>}
        </div>
        <div className={infoEast} >

          {/* <div>{data.birthPlace}</div>
        <div>{data.stable}</div>
        <div>Rank: {data.rank.sumoRank("Nn # Dd")}</div> */}
        </div>
        <div className={infoWest} >

          {/* <div>{data.birthPlace}</div>
        <div>{data.stable}</div>
        <div>Rank: {data.rank.sumoRank("Nn # Dd")}</div> */}
        </div>
      </div>
    )
  }
}
