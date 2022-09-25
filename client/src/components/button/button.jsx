import React from 'react'
import Style from "./button.module.scss"

const Button = (props) => {
  return (
    <button className={Style.button}  >{props.text}</button>
  )
}

export default Button