import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

class FullBar extends Component {
  state = {
    bars: []
  }

  componentDidMount () {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ bars: res }))
      .catch(err => console.log(err))
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/bars')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body
  }

  render () {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr className='tr'>
              <th className='th'>Bar</th>
              <th className='th'>Markup</th>
              <th className='th'>Address</th>
              <th className='th'>City</th>
              <th className='th'>State</th>
              <th className='th'>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {this.state.bars.map(bar => (
              <tr key={bar.Bar} className='tr'>
                <td className='td'>
                  <NavLink to={`/bar/${bar.Bar}`}>
                    {bar.Bar}
                  </NavLink>
                </td>
                <td className='td'>{bar.Markup} </td>
                <td className='td'>{bar.Address}</td>
                <td className='td'>{bar.City}</td>
                <td className='td'>{bar.State}</td>
                <td className='td'>{bar.Phone_Number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default FullBar
