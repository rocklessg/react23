import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button clicked')
    }
  return (
    <div>
        <button onClick={clickHandler}>FunctionClick</button>
    </div>
  )
}

export default FunctionClick