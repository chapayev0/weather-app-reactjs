import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.png';
import './App.css';
import Card from './components/card';

function App() {

  const [weatherData, setWeatherData] = useState([]);
  const apiKey = "e3fee7cef45997315031fdd443f662ff";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  const units = "metric";

 

  useEffect(() => {
    const fetchWeatherData = async () => {
      const jsonFileUrl = '';
      const response = await fetch(jsonFileUrl);
      const jsonData = await response.json();
      const citycodes = jsonData.List.map(city => city.CityCode);

      const weatherPromises = citycodes.map(cityCode => {
        const requestUrl = `${apiUrl}?id=${cityCode}&appid=${apiKey}&units=${units}`;

        return axios.get(requestUrl)
          .then(response => response.data)
          .catch(error => {
            console.error('Error fetching weather data:', error);
            return null;
          });
      });

      Promise.all(weatherPromises).then(weatherDataArray => {
        setWeatherData(weatherDataArray.filter(data => data !== null));
      });
    };

    fetchWeatherData();
  }, [apiKey]);

  
  return (
    
    <div className='app'>

      <div className='logo'>

        <img src={logo} className="App-logo" alt="logo" />
        <h3> &nbsp; Weather App</h3>
            
      </div>

      <div className='inp'>

        <div className='inp-contents'>

          <input type="text" class="form-control" placeholder="Enter a city"/>
          <button type="button" class="btn btn-primary btn-add-city">Add City</button>

        </div>


      </div>

      <div className='card-container'>

        {weatherData.map((weatherDataItem, index) => (
        <Card key={index} data={weatherDataItem} />
        )
        )}
      </div>


      
    <footer>
      <div className="container">
        <p>&copy; 2023 Fidenz Technologies</p>
      </div>
    </footer>


    </div>




    
  );
}

export default App;
