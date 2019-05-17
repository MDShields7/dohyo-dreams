import React, { Component } from 'react'
import 'sumo-rank'


export default class JpRankCard extends Component {
  render() {
    const { data } = this.props;
    const img = require('../../assets/rikishi-img/' + this.props.data.img + '.jpg')
    console.log(img)
    console.log(data.rank.sumoRank("Nn # Dd"))
    return (
      <div>

        <img src={img} alt="" />
        <div>Name: {data.name}</div>
        <div>Birth Place: {data.birthPlace}</div>
        <div>Stable: {data.stable}</div>
        <div>Rank: {data.rank.sumoRank("Nn # Dd")}</div>
      </div>
    )
  }
}
