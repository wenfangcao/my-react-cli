import React, { Component } from 'react'

export default class Home extends Component {

  componentWillMount() {
    console.log('aaa')
  }

  render() {
    return (
      <div onClick={()=>{this.props.history.push('/login')}}>home</div>
    )
  }
}
