import React, { Component } from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import Home from './view'
import store from './store'
import { createBrowserHistory } from 'history'
const history = syncHistoryWithStore(createBrowserHistory(), store)
// store.dispatch(reducer('aa', 'ADD'))
export default class App extends Component {
  componentDidMount() {
    console.log('home')
    console.log(this)
    console.log(store.getState().reducer)
    dispatch({
      type: 'ADD',
      
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/home" components={Home}>
          {/* <IndexRoute component={Login}/> */}
          </Route>
        </Router>
      </Provider>
    )
  }
}


