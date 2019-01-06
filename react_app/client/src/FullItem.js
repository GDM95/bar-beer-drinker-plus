import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

class FullItem extends Component {
  state = {
    items: []
  }

  componentDidMount () {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ items: res }))
      .catch(err => console.log(err))
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/items')
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
              <th className='th'>Type</th>
              <th className='th'>Manf.</th>
              <th className='th'>Base Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map(item => (
              <tr key={item.Name} className='tr'>
                <td className='td'>
                  <NavLink to={`/items/${item.Name}`}>
                    {item.Name}
                  </NavLink>
                </td>
                <td className='td'>{item.Type} </td>
                <td className='td'>{item.Manf}</td>
                <td className='td'>{item.Base_Price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default FullItem
