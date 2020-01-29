import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from '../src/Main'
import NewFolders from '../src/components/newFolders'
export default class App extends Component {
  render() {
    return (

      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/newFolders' component={NewFolders} />
        </Switch>

      </Router>

    )
  }
}
