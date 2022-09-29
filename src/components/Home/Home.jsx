import React from 'react'
import Card from '../organisms/Card/Card'
import './home.css'

const Home = ({ cities, onClose }) => {
  return (
    <div className='homeContainer'>
        {cities.map(c=><Card city={c} key={c.id} onClose={onClose}/>)}
    </div>
  )
}

export default Home