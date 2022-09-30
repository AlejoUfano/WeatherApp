import React from 'react'
import Card from '../organisms/Card/Card'
import ExtraCard from '../organisms/ExtraCard/ExtraCard'
import './home.css'

const Home = ({ cities }) => {
  return (
    <div className='homeContainer'>
        {cities.map(c=><Card city={c} key={c.id}/>)}
        {cities.map(c=><ExtraCard city={c} key={c.id}/>)}
    </div>
  )
}

export default Home