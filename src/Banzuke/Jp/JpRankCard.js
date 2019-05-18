import React, { Component } from 'react'
import 'sumo-rank'


export default class JpRankCard extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {

    const { data } = this.props;
    // const { key } = data;
    console.log(data)
    const img = require('../../assets/rikishi-img/' + data.img + '.jpg')

    return (
      <div onClick={() => data.inspect(data.key)} >

        <img src={img} alt="" />
        <div>{data.name}</div>
        <div>{data.birthPlace}</div>
        <div>{data.stable}</div>
        <div>Rank: {data.rank.sumoRank("Nn # Dd")}</div>

      </div>
    )

  }
}
