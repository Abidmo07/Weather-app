/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import axios from "axios"
import { WeatherApiKey } from "../Consts";


export default function Card(props) {
  const [weather,setWeather]=useState(null);
  const [error,setError]=useState(null);
  useEffect(() => {
    //we put this because every time we call the api we should update the state
      setError(null);
    setWeather(null);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.location}&appid=${WeatherApiKey}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log("Error:", e.response);
        if (e.response && e.response.status === 404) {
          setError("City not recognized");
        } else {
          setError("An error occurred. Please try again later.");
        }
      });
  }, [props.location]);
    
    
      if (!weather && !error) {
    // Show loading or placeholder content until weather data is available
    return<>
    <span className="loading loading-ball loading-xs"></span>
<span className="loading loading-ball loading-sm"></span>
<span className="loading loading-ball loading-md"></span>
<span className="loading loading-ball loading-lg"></span>
</>
  }
  if (error) {
    // Display the error message if there's an error
    return <div className="text-center text-red-500">{error}</div>;
  }
  

  return (
   <>

   <div className="px-3 shadow-xl card bg-neutral">
    <div className="flex flex-col items-center space-y-5 text-center card-body ">
        <h2 className="text-5xl font-bold">{props.location}</h2>
        <p className="text-5xl font-medium ">{weather.main.temp.toFixed(0)}°C</p>
    </div>
    <div className="flex flex-row items-center justify-center gap-10 mb-5">
        <div className="flex flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
</svg>

            <p className="text-2xl font-normal">{weather.clouds.all}%</p>
        </div>
        <div className="flex flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>
      <p className="text-2xl font-normal">{weather.wind.speed.toFixed(0)} m/s</p>

        </div>
        <div className="flex flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
  <p className="text-2xl font-normal">{weather.main.humidity}%</p>
        </div>
          
     </div>
   </div>
   </>

  )
}
