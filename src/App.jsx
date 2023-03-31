import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=a25fbabdfec8e348ffa4bccc2f60dec8`

  const getApiData = () => {
      axios
      .get(url)
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    getApiData()
  }, [location])

  const searchLocation = (e) => {
    e.preventDefault()

    setLocation(e.target[0].value)
  }

  return (
    <div className="app">
      <form onSubmit={(e) => searchLocation(e)} className="search">
        <input 
        placeholder='Enter location'
        type="text" />
      </form>
      <div className='container'>
        <div className='top'>
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1 className='degrees'>{((data.main?.temp - 32) * 5/9).toFixed()}°C</h1> : null}
            {data.main ? <h1 className='fahrenheit'>{data.main?.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {
        data.name != undefined &&
        <div className='bottom'>
        <div className="feels">
          {data.main ?<p className='bold'>{data.main?.feels_like.toFixed()}°F</p> : null}
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          {data.main ? <p className='bold'>{data.main?.humidity}%</p> : null}
          <p>Humidity</p>
        </div>
        <div className='wind'>
          {data.wind ? <p className='bold'>{data.wind?.speed.toFixed()} MPH</p> : null}
          <p>Wind Speed</p>
        </div>
      </div>
        } 
      </div>
    </div>
  );
}

export default App
