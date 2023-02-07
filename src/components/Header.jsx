import React from 'react'
import classes from "./css/Header.module.css"
import {BsChevronDown} from "react-icons/bs"
import {BsMouse} from "react-icons/bs"

const Header = () => {
  return (
    <header className={classes.header}>
          <h1>Enjoy Our Cuisine</h1>
        <div className={classes.mouse_scroll}>
              <div className={classes.mouse}>
                  <BsMouse />
              </div>              
            <div className={classes.chevron_down}>
              <div className={classes.first}><BsChevronDown /></div>
              <div className={classes.second}><BsChevronDown /></div>
              <div className={classes.third}><BsChevronDown /></div>
            </div>
        </div>
    </header>
  )
}

export default Header