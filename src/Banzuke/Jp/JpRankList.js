import React, { Component } from 'react'
import RankHOC from '../RankHOC'
import JpRankGroup from './JpRankGroup'
// import _ from 'lodash';
import './JpRankList.scss'

class JpRankList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banzuke: [],
      selectIndex: 'hi',
      selectWrestler: 'hi'
    }
  }

  componentDidMount() {
    this.makeBanzuke()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectWrestler !== prevState.selectWrestler) {
      this.makeBanzuke()
    }
  }
  inspectWrestler = (key) => {
    const { selectWrestler, selectIndex } = this.state;
    if (selectWrestler === null) {
      this.setState({
        selectIndex: key,
        selectWrestler: this.props.data[key]
      })
    } else if (selectWrestler !== null && key !== selectIndex) {
      this.setState({
        selectIndex: key,
        selectWrestler: this.props.data[key]
      })
    } else if (selectWrestler !== null) {
      this.setState({
        selectIndex: null,
        selectWrestler: null
      })
    }
  }
  makeBanzuke = () => {
    console.log('JpRankList, selectWrestler', this.state.selectWrestler)
    const { banzuke, selectWrestler } = this.state
    let newBanzuke = (banzuke.length ? [] : banzuke.slice())
    if (this.props && this.props.data) {
      let { data } = this.props;
      for (let i = 0; i < data.length; i++) {
        let w1 = data[i];
        let w2 = data[i + 1] ? data[i + 1] : null;
        let rank1 = w1.rank.sumoRank("N");
        let rank2 = w2 ? w2.rank.sumoRank("N") : -1;
        if (rank1 === rank2) {
          newBanzuke.push(<JpRankGroup w1={w1} w1Index={i} sIndex={selectWrestler} rank={w1.rank.sumoRank("N#")} w2={w2} w2Index={(i + 1)} inspect={this.inspectWrestler} />)
          i++;
        } else {
          newBanzuke.push(<JpRankGroup w1={w1} w1Index={i} sIndex={selectWrestler} rank={w1.rank.sumoRank("N#")} inspect={this.inspectWrestler} />)
        }
      }
    }
    this.setState({
      banzuke: newBanzuke
    })
  }
  render() {
    const { banzuke } = this.state;
    console.log('JpRankList this.state', this.state)
    return (
      <>
        <div className='sticky-nav'>
          <div className='container-2'>
            <div className='row'>
              <div className='direction'>
                <div className='text-white'>East</div>
              </div>
              <div className='rank'>
                <div className='margin text-white'>Rank</div>
              </div>
              <div className='direction'>
                <div className='text-white'>West</div>
              </div>
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