import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  incrementCount() {
    // this.setState({ 
    //   count: this.state.count + 1
    // })
    this.setState(
      prevState => ({
        count: prevState.count + 1
      })
    )
    console.log(this.state.count)
    // this.setState({ count: () => (
    //  () => {
    //   for (let index = 0; index < this.state.count.length; index++) {
    //     const element = array[index];        
    //   }
    //  }
    // )})
  }

  decrementCount() {
    // this.setState({ count: this.state.count-1}) 
    this.setState(
      prevState => ({
      count: prevState.count - 1
    }))   
  }

  incrementCountBy5() {
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
  }

  decrementCountBy3() {
    this.decrementCount()
    this.decrementCount()
    this.decrementCount()
  }

  render() {
    return (
      <div>
          <h1>
              Count { this.state.count }
          </h1>
          <button onClick={() => this.incrementCountBy5()}>
              Count +
          </button>
          <button onClick={() => this.decrementCountBy3()}>
              Count -
          </button>
      </div>
    )
  }
}

export default Counter