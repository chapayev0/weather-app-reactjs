import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.png';
import './App.css';
import Card from './components/card';
import JData from './cities.json'
import jsonData from './cities.json';


function App() {

  const [weatherData, setWeatherData] = useState([]);
  const apiKey = "e3fee7cef45997315031fdd443f662ff";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  const units = "metric";
  const citycodes = "sfsf";

 
  
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
      
        const { List } = jsonData;


        const cityIds = List.map(city => city.CityCode);

        const weatherPromises = cityIds.map(cityId => {
          const requestUrl = `${apiUrl}?id=${cityId}&appid=${apiKey}&units=${units}`;

          return axios.get(requestUrl)
            .then(response => response.data)
            .catch(error => {
              console.error(`Error fetching weather data for city ${cityId}:`, error);
              return null;
            });
        });


        const weatherDataArray = await Promise.all(weatherPromises);

     
        const filteredWeatherData = weatherDataArray.filter(data => data !== null);

       
        setWeatherData(filteredWeatherData);
      } catch (error) {
        console.error('Error fetching and processing data:', error);
      }
    };

   
    fetchWeatherData();
  }, [apiKey]);

  return (


    <body>

        <div className='app'>

        <div className='logo'>

          <img src={logo} className="App-logo" alt="logo" />
          <h3> &nbsp; Weather App</h3>
              
        </div>

        <div className='inp'>

          <div className='inp-contents'>

            <input type="text" className="form-control" placeholder="Enter a city"/>
            <button type="button" className="btn btn-primary btn-add-city">Add City</button>

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


      
    </body>
    
    
    



    
  );
}

export default App;
