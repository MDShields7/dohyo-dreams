import React, { Component } from 'react'
// import _ from 'lodash';
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
    const { w1, w2, } = this.state;
    if (w1) {
      return (<>
        <div className='direction-2'>
          <p className='text-xxs'>Place of Birth:</p>
          <p className='text-xs-b'>{w1.birthPlace}</p>
          <p className='text-xxs'>Stable:</p>
          <p className='text-xs-b'>{w1.stable}</p>
        </div>
        <p className='rank-content text-s'></p>
        <div className='direction-2'>
          {w2 ? <>
            <p className='text-xxs'>Place of Birth:</p>
            <p className='text-xs-b'>{w2.birthPlace}</p>
            <p className='text-xxs'>Stable:</p>
            <p className='text-xs-b'>{w2.stable}</p>
          </> : <div />}
        </div>
      </>)
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
          <div className='rank-content'>
            <div className='margin'>
              {rank}
            </div>
          </div>
          <div className='direction' onClick={() => inspect(w2Index)}>
            {w2 && w2Index ? <JpRankCard data={w2} inspect={this.props.inspect} /> : <div></div>}
          </div>
        </div>
        <div className={sIndex === w1 || sIndex === w2 ? 'info-show' : 'info-hide'} >
          <div className='row'>
            {sIndex === w1 || sIndex === w2 ? this.loadInfo(sIndex) : <div />}
          </div>
        </div>
      </div>
    )
  }
}
