import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Example from './Example'
import Affich from './Affich'



class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div >
          <Switch>
            <Route  path='/affich'  component= {Affich}/>
            <Route  path='/bla'  component= {Example}/>

          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

if (document.getElementById('affich')) {
  ReactDOM.render(<App />, document.getElementById('affich'));
}