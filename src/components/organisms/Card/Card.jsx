import React from 'react'
import './card.css'

const Card = ({ city }) => {
  return (
    <div className='cardContainer'>
        <div className='cardTitle'>{city.name}</div>      
        <div className='infoContainer'>
          <div className='cardTemp'>{city.main.temp.toString().split('.')[0]}°</div>        
          <div className='weatherInfo'>
            <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}.png`} alt='icon' className='cardImg' />
            <div className='weatherType'>{city.weather[0].main}</div>
          </div>
        </div>
    </div>
  )
}

export default Card