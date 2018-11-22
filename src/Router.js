import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { Switch } from 'react-router'
import { Provider } from 'react-redux'
import Home from './view'
import Login from './view/Login'
import store from './store'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={Home}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
