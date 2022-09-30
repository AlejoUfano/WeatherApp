import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './components/organisms/NavBar/NavBar'
import Home from './components/Home/Home'
import {API_KEY} from './utils/weather'

function App() {
  let [cities, setCities] = useState([])
  let getCity = async (city) => {
    try {
      let data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      if(cities.filter(c=>c.id===data.data.id).length){
        return alert(`${data.data.name} city is already loaded`)
      } else {
        setCities([data.data])
      } 
    } catch (e) {
      return alert(`${city} not found!`)
    }
  }
  useEffect(()=>{

  },[setCities])
  return (
    <div className='globalContainer'>
      <NavBar getCity={getCity} />
      <Home cities={cities} />
    </div>
  );
}

export default App;
