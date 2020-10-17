import React, {useState} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {

  const [getweather, setgetWeather]=useState(null)
  const [cityname, setcityName]=useState('')
  const [countryname, setCountryName]=useState('')
  const [savedhistory, setsavedHistory]= useState('')


  function getWeather(e){
    setgetWeather(e.target.value)
  }

  function cityName(e){
     setcityName(e.target.value)
  }

  function countryName(e){
    setCountryName(e.target.value)
  }

  function savedHistory(e){
    setsavedHistory(e.target.value)
  }

  const setweather = () => {
    if (countryName && cityName)
      axios
          .get(
                'http://api.weatherstack.com/current?access_key=2ec8c14f204fc798f4d3a50d69158c96&query={countryName},{cityName}'
                )
          .then((res) => {
                  getWeather({...res.data});
                  savedHistory(...res.data);
            })
            .catch((error) => {
                console.log(error);
            });
  };
  return (
    <div>
      <input type="text" name="countryName" className="wee" placeholder="countryName"/>
      <input type="text" name="cityName" className="wee" placeholder="cityName"/>
      <button onClick={getweather}>Get Weather</button>
      <p>{getweather}</p>
    
    </div>
  );
}


export default App;
