import React from 'react'
import MenuItem from "./MenuItem"

const SectionItem = ({menuTitle}) => {

  const menuItems = menuTitle.items.map((item) => {
    return <MenuItem item = {item}/>
  })
  return (
    <div>
      <h1>{menuTitle.title}</h1>
      <ul>{menuItems}</ul>
    </div>
  )
}

export default SectionItem