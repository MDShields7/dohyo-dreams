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
        <div className='direction'>
          <div className='text-xs'>{w1.birthPlace}</div>
          <div className='text-xs'>{w1.stable}</div>
        </div>
        <p className='rank text-s'></p>
        <div className='direction'>
          {w2 ? <>
            <div className='text-xs'>{w2.birthPlace}</div>
            <div className='text-xs'>{w2.stable}</div>
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
          <div className='rank'>
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
