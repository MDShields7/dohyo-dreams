import React, { Component } from 'react'
import RankHOC from '../RankHOC'
import JpRankCard from './JpRankCard'
import { Sticky, StickyContainer } from 'react-sticky'
import './JpRankList.scss'

class JpRankList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardType: null
    }
  }
  render() {
    const { data } = this.props;
    const rankNav = {
      'top': '56px',
      'left': '0px',
      'width': '100vw',
      'background-color': 'black',
    }

    return (
      <>
        <div className='sticky-outer '>
          <div className='container-2'>
            <div className='row'>
              <div className='direction'>
                <div className='margin rank-text'>East</div>
              </div>
              <div className='rank'>
                <div className='margin rank-text'>Rank</div>
              </div>
              <div className='direction'>
                <div className='margin rank-text'>West</div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-2'>

          {data ? data.map(elem => {
            return <JpRankCard data={elem} />
          }) : <div>"Loading"</div>}

          {/* <StickyContainer className='sticky-outer'>
          <Sticky topOffset={0}>
            {({ style }) => <div style={{ ...style, ...rankNav }}>RANKS</div>}
          </Sticky>
        </StickyContainer> */}
        </div >
      </>
    )
  }
}

export default RankHOC(JpRankList, 'www/dohyo-dreams.com')