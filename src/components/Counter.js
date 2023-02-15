import React, { Component } from 'react'

class Counter extends Component {

  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      count: 0
  //   }
  // }

  // incrementCount() {
  //   // this.setState({
  //   //   count: this.state.count + 1
  //   // })
  //   this.setState(
  //     prevState => ({
  //       count: prevState.count + 1
  //     })
  //   )
  //   console.log(this.state.count)
  //   // this.setState({ count: () => (
  //   //  () => {
  //   //   for (let index = 0; index < this.state.count.length; index++) {
  //   //     const element = array[index];        
  //   //   }
  //   //  }
  //   // )})
  // }

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
    const {count, incrementCount, decrementCountBy3, decrementCountBy5 } = this.props
    return (
      <div>
          <h1>
              Your click count is now { count }
          </h1>
          <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    )
  }
}

export default Counter