//import logo from "./logo.svg"
import { Component } from "react"
import "./App.css"
import Greet from "./components/Greet"
import Hello from "./components/Hello.js"
import Message from "./components/Message"
import Counter from "./components/Counter"
import FunctionClick from "./components/FunctionClick"
import ClassClick from "./components/ClassClick"
import EventBind from "./components/EventBind"
import ParentComponent from "./components/ParentComponent"
import UserGreeting from "./components/UserGreeting"
import NameList from "./components/NameList"
import Form from "./components/Form"
import LifecycleA from "./components/LifecycleA"
import FragmentDemo from "./components/FragmentDemo"
import Table from "./components/Table"
import ParentComp from "./components/ParentComp"
import Hero from "./components/Hero"
import ErrorBoundary from "./components/ErrorBoundary"
import ClickCounter from "./components/ClickCounter"
import HooverCounter from "./components/HooverCounter"

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           hello world
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         < Greet />
//       </header>       */}
//       < Greet name="Amin"/>
      
//       {/* < Hello /> */}
//     </div>
//   )
// }
class App extends Component {
  render() {
    return(
      <div className="App">

      < ClickCounter />
      < HooverCounter />

        {/* < ErrorBoundary>
          < Hero heroName="Batman" />
        </ErrorBoundary>

        < ErrorBoundary>
          < Hero heroName="Superman" />
        </ErrorBoundary>

        < ErrorBoundary>
          < Hero heroName="Joker" /> 
        </ErrorBoundary> */}
        
        {/* < ParentComp /> */}
        {/* < FragmentDemo /> */}
        {/* < Table /> */}
        {/* < LifecycleA /> */}
        {/* < Form /> */}
        {/* < NameList /> */}
        {/* < UserGreeting /> */}
        {/* < ParentComponent /> */}
        {/* < EventBind /> */}
        {/* < FunctionClick /> */}
        {/* < ClassClick /> */}
        {/* < Greet name="Al-amin" heroname="Abdulhafiz" /> */}
        {/* <Message /> */}
        {/* < Counter /> */}
      </div>
    )
  }
    
  
}

export default App
