import React from 'react'
import './card.css';

function card() {
    return(

        <div class="col-md-5">
            <div class="card custom-card ${cid}">
        
            <div class="row">
        
            <div class="col-sm-10"></div>
            <div class="col-sm-2 text-right"> 
        
                <div style="position: absolute; top: -15px; right: 18px;">
                    <button style="width: 20px; height: 20px; background: none;   background-image: url('img/close.png'); 
                    background-size: cover;
                    background-repeat: no-repeat; border:none;"></button>
                </div>
        
            </div>
        </div>
        
            
        
            <div class="row back-img">
            <div class="col-sm-6 align-middle order-1 order-md-1">
        
                <div class="card-img-top">
                    <img src="img/cloud_bg.png" alt="Image Alt Text"/>
                </div>
        
                <div class="text-center">
                    <div class="d-flex align-items-center location" style="display:flex;  padding-left: 30px;">${city}, ${county}</div>
                    <div class="d-flex align-items-center datetime" style="display:flex; padding-left: 40px;">${date_time}</div>
                    <div class="d-flex align-items-center datetime" style="padding-left: 10px;">
                        <div class="weather-indicate-image" style="display:contents; justify-content: center; align-items:center; text-align:center; padding-left: 10px;"><img src=${ico_path} alt=""/></div>
                        <div class="weather">${weatherDescription}</div>
                    </div>
                </div>
            </div>
        
            <div class="col-sm-6 align-middle order-2 order-md-2"> 
        
                <div class="text-center" style=" font-size: 28px; text-align: center;">
                    <div class="temperature">${temperature}&#176C</div>
                    <div class="man-temp" style=" font-size: 10px; text-align: center;">Temp Min: ${minTemp} &#176 C</div>
                    <div class="mix-temp" style=" font-size: 10px; text-align: center;">Temp Max: ${maxTemp} &#176 C</div>
                </div>
            </div>
        </div>
        
        
              
                <div class="new-div">
                    <div class="bg-dark new-div-content">
                        <div class="new-div-part">
                            <div>Pressure:${presher}hPa</div>
                            <div>Humidity:${humidity}%</div>
                            <div>Visibility:${visibality}km</div>
                        </div>
        
                        <div class="vertical-line"></div>
        
                        <div class="new-div-part">
                            <div class="nav_img"><img src="img/nav.png" alt=""/></div>
                            <div>${wind_speed}m/s ${deg} Degree</div>
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
}
export default card