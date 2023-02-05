import React from 'react'

function NameList() {
    const names = ['Al-amin', 'Fathyma', 'Zainab', 'Al-amin']
    const nameList = names.map((name, index) => <h2 key={index}>{name} at index {index}</h2>)
  return <div>{nameList}</div>
}

export default NameList
