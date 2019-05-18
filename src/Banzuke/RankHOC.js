import React, { Component } from 'react'
// import axios from 'axios'
import Rikishi from './Mock-Rikishi.json'

function RankHOC(CountryComponent, url) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null
      }
    }
    getData = () => {
      // axios.get(url).then((stuff) => {
      //   this.setState({
      //     data: stuff.data
      //   })
      // }).catch(err => console.log(err))
      console.log(Rikishi);
      this.setState({
        data: Rikishi
      })

    }
    render() {



      return (
        <div>
          {
            this.state.data ?
              <CountryComponent data={this.state.data} />
              : this.getData()
          }
        </div >
      )
    }
  }
}

export default RankHOC;