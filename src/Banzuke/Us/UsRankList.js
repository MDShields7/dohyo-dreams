import React, { Component } from 'react'
import RankHOC from '../RankHOC'
import UsRankCard from './UsRankCard'

class UsRankList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardType: null
    }
  }

  render() {
    return (
      <>
        UsRankList Format
      </>
    )
  }
}

export default RankHOC(UsRankList, UsRankCard, 'www/dohyo-dreams.com')