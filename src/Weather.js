import React from "react";
import "./App.css";

const Weather = ({weatherInfo})=>{
    const img = `https://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`
    return(
            <div className="main">
                <div className="img-div">
                    <h2>{weatherInfo.main.temp}</h2>
                    <img width= "70" height="70" src={img} alt="" />
                </div>
                <div className="weather-info-div">
                    <h3>{weatherInfo.weather[0].description}</h3>
                    <h3>Humidity: {weatherInfo.main.humidity}</h3>
                    <h3>Country Code: {weatherInfo.sys.country}</h3>
                    <h3>City: {weatherInfo.name}</h3>
                    <h3>Wind Speed: {weatherInfo.wind.speed}</h3>
                    <h3>Pressure: {weatherInfo.main.pressure}hPa</h3>
                    <h3>Longitude: {weatherInfo.coord.lon}</h3>
                    <h3>Latitude: {weatherInfo.coord.lat}</h3>
                </div>
            </div>
    )
}

export default Weather;