import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FullBar from './FullBar'
import Splash from './Splash'
import Header from './Header'
import FullItem from './FullItem'
import FullDrinker from './FullDrinker'
import Drinker from './Drinker'
import Bar from './Bar'
import Item from './Item'

// The Header creates links that can be used to navigate
// between routes.
class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <header>
            <Header />
          </header>
          <main>
            <Route exact path='/' component={Splash} />
            <Route path='/bar' component={FullBar} exact />
            <Route path='/bar/:name' component={Bar} />
            <Route path='/item' component={FullItem} exact />
            <Route path='/item:name' component={Item} />
            <Route path='/drinker' component={FullDrinker} exact />
            <Route path='/drinker/:name' component={Drinker} />
          </main>
        </div>
      </Router>
    )
  }
}

export default App
