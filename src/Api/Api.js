import React, { Component } from 'react'
import './Api.scss'

export default class Api extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Sumo Resource</h1>
        <h2>Why?</h2>
        <p>This website is designed to be a public resource for the sumo community. There are many fantasy leagues and websites that separately record sumo matches every tournament, but none of that data is available. That's why I have built this public API. My hope is that this will become used and maintained by the sumo community.
        </p>
        <p>My second goal is for this site to have a modern, mobile-friendly layout. The only modern, mobile-friendly sumo site I have found is by the sumo association, Nihon Kyokai, and even that is not perfect.</p>
        <h2>Current Database</h2>
        <h3>Banzuke (Rankings List)</h3>
        <p>Only Haru 2019 is included.</p>
        <h3>Rikishi (Wrestlers)</h3>
        <p>Only rikishi who were ranked at Makuuchi during Haru 2019.</p>
        <h2>Future Additions</h2>
        <h3>Basho results</h3>
        <p>Daily Bout Results, including final tournament results, special prizes, retirements, etc.</p>
        <p></p>
      </div>
    )
  }
}
