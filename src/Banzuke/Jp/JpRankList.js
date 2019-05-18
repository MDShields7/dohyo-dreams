import React, { Component } from 'react'
import RankHOC from '../RankHOC'
import JpRankCard from './JpRankCard'
import './JpRankList.scss'

class JpRankList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardType: null,
      // ranks: ["Y", "O", "S", "K", "M"]
      banzuke: [],

    }
  }
  componentDidMount() {
    this.makeBanzuke()
  }
  // componentDidUpdate(prevProps) {
  //   if (this.props.data !== prevProps.data) {
  //     this.setState()
  //   }
  // }
  inspectWrestler = (key) => {
    // let value = e.target.value;
    // console.log(e.target)
    // e.preventDefault();
    console.log(this.state.banzuke[key])
  }
  rankGroup = (eastItem, eastKey, rankItem, westItem, westKey) => {
    eastItem = Object.assign(eastItem, { key: eastKey, inspect: this.inspectWrestler })
    if (westItem && westKey) {
      westItem = Object.assign(westItem, { key: westKey, inspect: this.inspectWrestler })
    }
    return (
      <>
        <div className='container-2'>
          <div className='row'>
            <div className='gutter' />
            <div className='direction'>
              <JpRankCard data={eastItem} />
            </div>
            <div className='rank'>
              {rankItem}
            </div>
            <div className='direction'>
              {westItem ? <JpRankCard data={westItem} /> : <div></div>}
            </div>
            <div className='gutter' />
            <div className='info-show'></div>
          </div>
        </div>
      </>)
  }
  makeBanzuke = () => {
    const { banzuke } = this.state
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
          newBanzuke.push(this.rankGroup(w1, i, w1.rank.sumoRank("N"), w2, (i + 1)))
          i++;
        } else {
          newBanzuke.push(this.rankGroup(w1, i, data[i].rank.sumoRank("N")))
        }
      }
    }
    this.setState({
      banzuke: newBanzuke
    })
  }

  render() {
    // const { data } = this.props;
    const { banzuke } = this.state;


    console.log(banzuke)
    // const playersArray = ( data ? data.map(elem => {
    //   return <JpRankCard data={elem} />
    // }) : [] );
    return (
      <>
        <div className='sticky-outer '>
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
          {/* 
          {data ? data.map(elem => {
            return <JpRankCard data={elem} />
          }) : <div>"Loading"</div>}
          */}
          {banzuke}

        </div >
      </>
    )
  }
}

export default RankHOC(JpRankList, 'www/dohyo-dreams.com')


// let even = (i) => {return i === 0 || i%2 === 0}
// loop through wrestlers
// wrestler rank name
//   create new rank row w/ wrestler rank name
//     if i%2 === 0 && wrestler rank direction === east
//     <rank group>
//       <rank row>
//         <east>
//         <rank name>
//         <west>
//       </rank row>
//       <info row east/>
//       <info row west/>
//     </rank group>
