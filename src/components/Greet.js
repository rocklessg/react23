import React from 'react'

// Destructuring Method 1
// const Greet = ({name, heroName}) => {
// return (
// <h1>Hello { name } a.k.a { heroName }</h1>
// )
// }


// Destructuring Method 2
const Greet = props => {
    const { name, heroName } = props
    return (
    <h1>Hello { name } a.k.a { heroName }</h1>
    )
    }

export default Greet