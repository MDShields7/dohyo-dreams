import React, { Component } from 'react'
import _ from 'lodash';
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
  componentDidUpdate(prevProps, prevState) {
    if (this.props.sIndex !== prevProps.sIndex) {
      console.log('CDU')
      this.setState({
        w1: this.props.w1,
        w1Index: this.props.w1Index,
        rank: this.props.rank,
        w2: this.props.w2,
        w2Index: this.props.w2Index,
        sIndex: this.props.sIndex
      })
    }
  }
  loadInfo = (clicked) => {
    const { w1, w2, w1Index, w2Index } = this.state;
    let data;
    if (clicked.name === w1.name) {
      data = w1;
    } else if (w2 && clicked.name === w2.name) {
      data = w2;
    }
    if (data) {
      return (<div className='direction'>
        <div>Birth Place: {data.birthPlace}</div>
        <div>Stable: {data.stable}</div>
      </div>)
    }
  }
  render() {
    const { w1Index, rank, w2Index, sIndex } = this.state;
    let { w1, w2 } = this.state;
    const { inspect } = this.props;
    if (sIndex === w1 || sIndex === w2) {
      console.log('true')
    }
    console.log('JpRankGroup, this.state', this.state)
    console.log('JpRankGroup, this.props', this.props)
    return (
      <div className='group-row' >
        <div className='row'>
          <div className='direction' onClick={() => inspect(w1Index)}>
            <JpRankCard data={w1} inspect={this.props.inspect} />
          </div>
          <p className='rank'>
            {rank}
          </p>
          <div className='direction' onClick={() => inspect(w2Index)}>
            {w2 && w2Index ? <JpRankCard data={w2} inspect={this.props.inspect} /> : <div></div>}
          </div>
        </div>
        <div className='row'>
          <div className={sIndex === w1 || sIndex === w2 ? 'info-show' : 'info-hide'} >
            {sIndex === w1 || sIndex === w2 ? this.loadInfo(sIndex) : <div />}
          </div>
        </div>
      </div>
    )
  }
}
