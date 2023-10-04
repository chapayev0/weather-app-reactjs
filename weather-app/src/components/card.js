import React from 'react'
import './card.css';
import axios from 'axios';


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
      ico_path = "img/few-cloud.png";
      bg_color = "#388EE7";
      cid = "fc";
    } else if (description === "broken clouds" || description === "scattered clouds") {
      bg_color = "#6249CC";
      ico_path = "img/broke-cloud.png";
      cid = "bc";
    } else if (description === "clear sky") {
      bg_color = "#40B681";
      ico_path = "img/clear-sky.png";
      cid = "cs";
    } else if (description === "light rain") {
      bg_color = "#D18B49";
      ico_path = "img/light-rain.png";
      cid = "lr";
    } else if (description === "mist") {
      bg_color = "#9C3A3A";
      ico_path = "img/mist.png";
      cid = "fc";
    } else {
      bg_color = "#40B681";
      cid = "cs";
      ico_path = "img/clear-sky.png";
    }
  
    const cardStyles = {
      backgroundColor: bg_color,
    };
  
    return (
            <div class="col-md-5">
            <div class="card custom-card ${cid}"> 
        
            <div class="row">
        
        
            <div class="col-sm-10"></div>
            <div class="col-sm-2 text-right"> 
        
            
                <div>
                    <button ></button>
                </div>
        
            </div>
        </div>
        
        
                        
            <div class="row back-img">
            <div class="col-sm-6 align-middle order-1 order-md-1">
        
                <div class="card-img-top">
                    <img src="img/cloud_bg.png" alt="Image Alt Text"/>
                </div>
        
                <div class="text-center">
                    <div class="d-flex align-items-center location" >${city}, ${country}</div>
                    <div class="d-flex align-items-center datetime" >${date_time}</div>
                    <div class="d-flex align-items-center datetime" >
                        <div class="weather-indicate-image"><img src="${ico_path}" alt=""/></div>
                        <div class="weather">${description}</div>
                    </div>
                </div>
            </div>
        
            <div class="col-sm-6 align-middle order-2 order-md-2"> 
        
                <div class="text-center" >
                    <div class="temperature">${temp}&#176C</div>
                    <div class="man-temp" >Temp Min: ${temp_min} &#176 C</div>
                    <div class="mix-temp" >Temp Max: ${temp_max} &#176 C</div>
                </div>
            </div>
        </div>
        
    

                <div class="new-div">
                    <div class="bg-dark new-div-content">
                        <div class="new-div-part">
                            <div>Pressure:${pressure}hPa</div>
                            <div>Humidity:${humidity}%</div>
                            <div>Visibility:${visibility}km</div>
                        </div>
        
                        <div class="vertical-line"></div>
        
                        <div class="new-div-part">
                            <div class="nav_img"><img src="img/nav.png" alt=""/></div>
                            <div>${speed}m/s ${deg} Degree</div>
                        </div>
        
                        <div class="vertical-line1"></div>
        
                        <div class="new-div-part">
                            <div>Sunrise:${format_sunrise}</div>
                            <div>Sunset:${format_sunset}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Card;