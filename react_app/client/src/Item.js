import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

class Item extends Component {
  state = {
    transactions: []
  }

  componentDidMount () {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ transactions: res }))
      .catch(err => console.log(err))
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/items/')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body
  }

  render () {
    return (
      <div>
        Transactions for {this.props.match.params.name}
        <table className='table'>
          <thead>
            <tr className='tr'>
              <th className='th'>Bar</th>
              <th className='th'>Total</th>
              <th className='th'>Time</th>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
    )
  }
}

export default Item
