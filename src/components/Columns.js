import React, { Fragment } from 'react'

function Columns() {
    const items = []
  return (
    <Fragment>
        {/* {
            items.map( item => (
                <Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </Fragment>
            ))
        } */}
      <td>Name</td>
      <td>Abdulhafiz</td>
    </Fragment>
  )
}

export default Columns
