import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./Weather";
import Error from "./Error";
import Loading from "./Loading";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Initialize to false instead of null

  const handleCityInput = (e) => {
    setCity(e.target.value);
  };

  const handleGetWeather = async () => {
    try {
      setLoading(true);
      setWeatherInfo(null);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f08cd5f06fb6a6e5f97490d572b65096&units=metric`;
      const getData = await axios.get(url);
      const data = getData.data;
      setWeatherInfo(data);
      setError(null);
      setLoading(false); // Set loading to false after successful data fetch
    } catch (err) {
      setLoading(false); // Set loading to false on error as well
      setWeatherInfo(null);
      setError("An Error Occured Please Recheck The Country/Location You Entered Or Connect To The Internet 🥺");
    }
  };

  return (
    <>
      <div className="location-input-div">
        <input
          type="text"
          placeholder="Enter Your City......"
          onChange={handleCityInput}
        />
      </div>
      <div className="button-div">
        <button onClick={handleGetWeather}>GET INFO</button>
      </div>
      {weatherInfo && <Weather weatherInfo={weatherInfo} />}
      {error && <Error error={error} />}
      {loading && <Loading loading={"Loading..."} />}
    </>
  );
};

export default App;
