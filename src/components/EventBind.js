import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
      // this.clickHandler = this.clickHandler.bind(this) 3
    }
    
    // clickHandler() {
    //     this.setState({ 
    //         message: 'GoodBye!' 
    //     })
    //     console.log(this)
    // }

    clickHandler = () => { //4
      this.setState({
          message: 'Goodbye!'
        })
    }
  render() {
    return (
      <div>
            <div>{this.state.message}</div>
            {/* <button onClick={this.clickHandler.bind(this)}>Click</button> 1*/} 
            {/* <button onClick={() => this.clickHandler()}>Click</button> 2*/}
            <button onClick={this.clickHandler}>Click</button>

      </div>
    )
  }
}

export default EventBind
