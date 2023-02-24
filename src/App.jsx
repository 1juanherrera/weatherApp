import axios from 'axios'
import { useState } from 'react'
import './App.css'

function App() {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=miami&appid=a25fbabdfec8e348ffa4bccc2f60dec8`

  return (
    <div className="App">
      <div className='container'>
        <div className='top'>
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>60°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className='bottom'>
          <div className="feels">
            <p>65°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className='wind'>
            12 MPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
