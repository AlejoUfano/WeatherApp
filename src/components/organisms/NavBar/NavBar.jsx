import React, { useEffect, useState } from 'react'
import './navBar.css'

const NavBar = ({ getCity }) => {
    let [city, setCity] = useState('')
    let handleChange = (e) => {
        setCity(e.target.value)
        console.log('city from nav: ', city);
    }
    let handleSubmit = (e) => {
      e.preventDefault()
      getCity(city)
    }    
  return (
    <div className='navContainer'>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input 
            type="text"
            placeholder="City..."
            value={city} 
            onChange={(e)=>handleChange(e)}
            />
            <button type='submit' >Search</button>
        </form>
    </div>
  )
}

export default NavBar