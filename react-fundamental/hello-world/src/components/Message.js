import React, { Component } from 'react'

class Message extends Component {
  constructor() {
    super()
    //always use the this keyword because we inside the class
    this.state = {
      message: 'welcome visitor',
    }
  }

  changeMessage() {
    this.setState({
      message: 'thankyou for subscribing',
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>subscribe</button>
      </div>
    )
  }
}


export default Message
