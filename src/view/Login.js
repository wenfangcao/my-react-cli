import React, { Component } from 'react'

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
        <button onClick={() => this.toHome()}>去home</button>
      </div>
    )
  }
}
