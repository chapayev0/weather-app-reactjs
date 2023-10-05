import React from 'react'
import './card.css';
import axios from 'axios';
import Bgimg from './img/cloud_bg.png'
import Fewcloud from './img/few-cloud.png'
import BrokeCloud from './img/broke-cloud.png'
import Clearsky from './img/clear-sky.png'
import LightRain from './img/light-rain.png'
import Mist from './img/mist.png'
import BackgroundImage from './img/cloud_bg.png'
import Nav from './img/nav.png'


const Card = ({ data }) => {
    if (!data) {
      return <div>Loading...</div>;
    }
  
    const {
      main: { temp, temp_max, temp_min, pressure, humidity },
      wind: { speed, deg },
      visibility,
      weather: [{ description }],
      sys: { sunrise, sunset },
      name: city,
      sys: { country },
    } = data;


  
    const sunriseDate = new Date(sunrise * 1000);
    const format_sunrise = sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  
    const sunsetDate = new Date(sunset * 1000);
    const format_sunset = sunsetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    const targetTimeZone = 'America/New_York';
    const currentDate = new Date();
  
    const options = {
      timeZone: targetTimeZone,
      hour: 'numeric',
      minute: 'numeric',
      month: 'short',
      day: 'numeric',
    };
  
    const date_time = new Intl.DateTimeFormat('en-US', options).format(currentDate);
  
   
    let ico_path = '';
    let bg_color = '';
    let cid = '';
  
    if (description === "few clouds" || description === "overcast clouds") {
      ico_path = Fewcloud;
      bg_color = "#388EE7";
      cid = "fc";
    } else if (description === "broken clouds" || description === "scattered clouds") {
      bg_color = "#6249CC";
      ico_path = BrokeCloud;
      cid = "bc";
    } else if (description === "clear sky") {
      bg_color = "#40B681";
      ico_path = Clearsky;
      cid = "cs";
    } else if (description === "light rain") {
      bg_color = "#D18B49";
      ico_path = LightRain;
      cid = "lr";
    } else if (description === "mist") {
      bg_color = "#9C3A3A";
      ico_path = Mist;
      cid = "fc";
    } else {
      bg_color = "#40B681";
      cid = "cs";
      ico_path = Clearsky;
    }
  

    const blackBackground = {
        backgroundColor: bg_color,
        
      };
  
    return (
            <div class="col-md-5">
            <div className={`card custom-card ${cid}`} style={blackBackground}> 
        
            <div class="row">
        
        
            <div class="col-sm-10"></div>
            <div class="col-sm-2 text-right"> 
        
            
                <div className='close-container'>
                    <button className='close-button'></button>
                </div>
        
            </div>
        </div>
        
        
                        
        <div class="row back-img">
        
            <div>
                
           

        
            <div class="card-img-top">
            <img src={Bgimg} alt="Image Alt Text"/>

                   
            </div>
        
                <div class="top-left-text">
                    <div class=" location" >{city}, {country}</div>
                    <div class="datetime">{date_time}</div>
                    <div class="datetime" >
                        <div class="weather-indicate-image" ><img src={ico_path} alt=""/></div>
                        <div class="weather">{description}</div>
                    </div>
                </div>
            </div>
        
            <div class="top-right-text"> 
        
                <div class="text-center">
                    <div class="temperature">{temp}&deg;C</div>
                    <div class="man-temp" >Temp Min: {temp_min} &deg; C</div>
                    <div class="mix-temp" >Temp Max: {temp_max} &deg; C</div>
                </div>
            </div>
        </div>
        
    

                <div class="new-div">
                    <div class="bg-dark new-div-content">
                        <div class="new-div-part">
                            <div>Pressure:{pressure}hPa</div>
                            <div>Humidity:{humidity}%</div>
                            <div>Visibility:{visibility}km</div>

                            
                        </div>
                        <div className="vertical-line"></div>
        
                        
        
                        <div class="new-div-part">
                            <div class="nav_img"><img src={Nav} alt=""/></div>
                            <div>{speed}m/s {deg} Degree</div>
                        </div>

                        <div className="vertical-line"></div>
        
                      
        
                        <div class="new-div-part">
                            <div>Sunrise:{format_sunrise}</div>
                            <div>Sunset:{format_sunset}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Card;