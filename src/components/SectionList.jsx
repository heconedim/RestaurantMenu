import React from 'react'
import SectionItem from "./SectionItem"


const SectionList = ({menu}) => {
    
  const menuElement =menu.map((menuTitle) => {
    return <SectionItem menuTitle = {menuTitle}/>
  })
  return (
    <div>{menuElement}</div>
  )
}

export default SectionList