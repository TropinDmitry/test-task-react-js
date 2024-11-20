import React from 'react'
import './Button.css'

const Button = ({text, className, onClick}) => {
    className = className !== '' ? ' ' + className : className;

  return (
    <button className={'btn' + className} onClick={onClick}>{text}</button>
  )
}

export default Button