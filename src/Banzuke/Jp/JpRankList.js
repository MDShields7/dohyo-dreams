import React, { Component } from 'react'
import RankHOC from '../RankHOC'
// import JpRankCard from './JpRankCard'
import JpRankGroup from './JpRankGroup'
import './JpRankList.scss'

class JpRankList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banzuke: [],
      selectIndex: null
    }
  }
  componentDidMount() {
    this.makeBanzuke()
  }
  // componentDidUpdate() {
  // }
  inspectWrestler = (key) => {
    console.log(key)
    // console.log(this.props.data[key])
    this.setState({
      selectIndex: this.props.data[key]
    })
  }
  makeBanzuke = () => {
    const { banzuke, selectIndex } = this.state
    let newBanzuke = banzuke.slice()
    if (this.props && this.props.data) {
      let { data } = this.props;
      for (let i = 0; i < data.length; i++) {
        let w1 = data[i];
        let w2 = data[i + 1] ? data[i + 1] : null;
        let rank1 = w1.rank.sumoRank("N");
        let rank2 = w2 ? w2.rank.sumoRank("N") : -1;
        console.log('wrestler1', w1)
        console.log('wrestler2', w2)
        if (rank1 === rank2) {
          newBanzuke.push(<JpRankGroup w1={w1} w1Index={i} sIndex={selectIndex} rank={w1.rank.sumoRank("N")} w2={w2} w2Index={(i + 1)} inspect={this.inspectWrestler} />)
          i++;
        } else {
          newBanzuke.push(<JpRankGroup w1={w1} w1Index={i} sIndex={selectIndex} rank={w1.rank.sumoRank("N")} inspect={this.inspectWrestler} />)
        }
      }
    }
    this.setState({
      banzuke: newBanzuke
    })
  }
  render() {
    const { banzuke } = this.state;
    // console.log(banzuke)
    return (
      <>
        <div className='sticky-nav '>
          <div className='container-2'>
            <div className='row'>
              <div className='gutter' />
              <div className='direction'>
                <div className='margin rank-text'>East</div>
              </div>
              <div className='rank'>
                <div className='margin rank-text'>Rank</div>
              </div>
              <div className='direction'>
                <div className='margin rank-text'>West</div>
              </div>
              <div className='gutter' />
            </div>
          </div>
        </div>
        <div className='container-2'>
          {banzuke}
        </div >
      </>
    )
  }
}
export default RankHOC(JpRankList, 'www/dohyo-dreams.com')