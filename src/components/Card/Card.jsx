import React from 'react'
import './Card.css'

const Card = ({icon, header, text}) => {
  return (
    <div className='card'>
        <div className='icon'>
            <img src={icon}/>
        </div>
        <h3>{header}</h3>
        <div className='underline'></div>
        <p>{text}</p>
    </div>
  )
}

export default Card