import React, { Component } from 'react'

class HooverCounter extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hoover {count} times</h1>
      </div>
    )
  }
}

export default HooverCounter
