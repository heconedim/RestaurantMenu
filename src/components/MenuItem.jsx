import React from 'react'

const MenuItem = ({item}) => {
  return (
    <li>
      <h1>{item.title}</h1>
      <h1>{item.price}</h1>
    </li>
  )
}

export default MenuItem