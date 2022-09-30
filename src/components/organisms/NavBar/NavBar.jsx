import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import './navBar.css'

const NavBar = ({ getCity }) => {
    let [city, setCity] = useState('')
    let handleChange = (e) => {
        setCity(e.target.value)
    }

    let handleSubmit = (e) => {
      e.preventDefault()
      getCity(city)
      setCity('')
    }    

  return (
    <div className='navContainer'>
        <form onSubmit={(e)=>handleSubmit(e)} className='formContainer'>
            <input 
            type='text'
            placeholder='Insert a location...'
            value={city} 
            onChange={(e)=>handleChange(e)}
            className='inputContainer'
            />            
            <button type='submit' className='searchButton'><BsSearch style={{ fill: '#fff' }} className='searchIcon' /></button>
        </form>
    </div>
  )
}

export default NavBar