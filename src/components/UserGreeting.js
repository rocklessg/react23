import React, { Component } from 'react'

// Conditional Rendering
class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {

    return this.state.isLoggedIn && <div>Welcome Nana Amin</div> // Short circuit approach

   // return this.state.isLoggedIn ? <div>Welcome Nana Amin</div> : <div>Welcome Guest</div> // ternary operator

    // let message // Element Variable approach
    // if (this.state.isLoggedIn) {
    //     message = 'Welcome Nana Amin'
    // } else {
    //     message = 'Welcome Guest'
    // }
    // return <div>{message}</div>



    // if (this.state.isLoggedIn) //{ if/else method
    //     return (
    //         <div>
    //              Welcome Nana Amin
    //        </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }


    // return (
    //   <div>
    //     <div>
    //         Welcome Nana Amin
    //     </div>
    //     <div>
    //         Welcome Guest
    //     </div>
    //   </div>
    // )
  }
}

export default UserGreeting
