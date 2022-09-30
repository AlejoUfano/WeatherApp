import React from 'react'
import './extraCard.css'

const ExtraCard = ({city}) => {
  return (
    <div className='extraCardContainer'>
        <div className='extraInfoContainer'>
            Feels Like
            <div className='infoData'>{city.main.feels_like.toString().split('.')[0]}°</div>
        </div>
        <div className='extraInfoContainer'>
            Humidity
            <div className='infoData'>{city.main.humidity}%</div>
        </div>
        <div className='extraInfoContainer'>
            Wind Speed
            <div className='infoData'>{city.wind.speed.toString().split('.')[0]} km/h</div>
        </div>

    </div>
  )
}

export default ExtraCard