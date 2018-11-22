import React, { Component } from 'react'
import '../css/login.styl'

export default class Login extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    
  }

  toHome() {
    this.props.history.push('/home')
  }

  render() {
    return (
      <div>
        <div>login</div>
        <button className="ss" onClick={() => this.toHome()}>去home</button>
      </div>
    )
  }
}

