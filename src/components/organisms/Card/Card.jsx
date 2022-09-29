import React from 'react'
import './card.css'

const Card = ({ city, onClose }) => {
  return (
    <div className='cardContainer'>
        <button onClick={()=>onClose(city.id)}>X</button>
        <div className="cardTitle">{city.name}</div>
        <div className="cardTemp">{city.main.temp}</div>
        <img src={`https://openweathermap.org/img/wn/${city.weather.icon}.png`} alt="icon" className="cardImg" />
    </div>
  )
}

export default Card