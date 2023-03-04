import React from 'react'
import SectionItem from "./SectionItem"


const SectionList = ({menu}) => {
    
  const menuElement =menu.map((menuTitle) => {
    return <SectionItem key={Math.random().toString()} menuTitle = {menuTitle}/>
  })
  return (
    <div>{menuElement}</div>
  )
}

export default SectionList