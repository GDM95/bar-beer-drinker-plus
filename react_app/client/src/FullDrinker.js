import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

class FullDrinker extends Component {
  state = {
    drinkers: []
  }

  componentDidMount () {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ drinkers: res }))
      .catch(err => console.log(err))
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/drinkers')
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
              <th className='th'>Name</th>
              <th className='th'>Address</th>
              <th className='th'>City</th>
              <th className='th'>State</th>
            </tr>
          </thead>
          <tbody>
            {this.state.drinkers.map(drinker => (
              <tr key={drinker.Name} className='tr'>
                <td className='td'>
                  <NavLink to={`/drinker/${drinker.Name}`}>
                    {drinker.Name}
                  </NavLink>
                </td>
                <td className='td'>{drinker.Address} </td>
                <td className='td'>{drinker.City}</td>
                <td className='td'>{drinker.State}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default FullDrinker
