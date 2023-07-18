import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./Weather";
import Error from "./Error";
import Loading from "./Loading";


const App = ()=>{
    const [city, setCity] = useState("");
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const handleCityInput = (e)=>{
        setCity(e.target.value);
    }

    const handleGetWeather = async ()=>{
        setLoading(true);
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f08cd5f06fb6a6e5f97490d572b65096&units=metric`;
            const getData = await axios.get(url);
            const data = getData.data;
            setWeatherInfo(data);
            setError(null);
            setLoading(null);
        }catch(err){
            setLoading(null);
            setError(err.message);
        }
    }

    return(
        <>
            <div className="location-input-div">
                    <input type="text" placeholder="Enter Your City......" onChange={handleCityInput}/>
            </div>
            <div className="button-div">
                <button onClick={handleGetWeather}>GET INFO</button>
            </div>
            {weatherInfo && <Weather weatherInfo={weatherInfo}/>}
            {error && <Error error={error}/>}
            {loading && <Loading loading={"Loading..."}/>}
        </>
    )
}

export default App;