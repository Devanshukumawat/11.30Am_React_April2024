import { useState } from "react";
import {WeatherSvg} from "weather-icons-animated"

function Weather() {

  const [weatherData,setWeatherData] = useState("")
  const [weather,setWaether] = useState({})

  const api_key = "e10e48cd5c1df35f6da8d75df73a8bb5"
  function handleSearch(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherData}&appid=${api_key}&units=metric`).then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data)
      setWaether(data)
    })
  }
  return (
    <>
      <div className="bg-image bg-cover bg-no-repeat h-screen flex justify-center items-center">
        <div></div>
        {/* Main div */}
        <div className="w-3/5 h-4/5 bg-[#000000b8;] rounded-lg flex">
          {/* Left Panel */}
          <div className="w-1/2 bg-left h-full bg-cover bg-no-repeat rounded-l-lg flex flex-col justify-between">
            {/* 1 */}
            <div className="flex justify-end m-4 ">
              <p className="font-bold text-2xl text-white">{weather.name} {weather.sys && weather.sys.country}</p>
            </div>

            <div className="flex justify-center">
              <img src={`https://openweathermap.org/img/wn/${weather.weather && weather.weather[0].icon}@2x.png`}
              alt=""/>
            </div>

            {/* 2 */}
            <div className="flex justify-between m-4">
              <div className="font-bold text-xl text-gray-200">
                <p>{weather.coord && weather.coord.lat}</p>
                <p>{weather.coord && weather.coord.lon}</p>
              </div>
              <div className="font-bold text-2xl text-gray-200">
                <p>{weather.main && weather.main.temp}°C</p>
              </div>
            </div>
          </div>
          {/* Right Panel */}
          <div className="h-full w-1/2">
            <div className="h-1/5 flex justify-center items-center border-b border-gray-300 m-4">
              <WeatherSvg state="sunny" width={100} height={100}></WeatherSvg>
            </div>

            <div className="flex border border-gray-200 rounded-lg w-3/5 mx-auto">
              <input
                type="search"
                placeholder="Search"
                value={weatherData}
                onChange={(e)=>{setWeatherData(e.target.value)}}
                className="bg-transparent  text-white placeholder-white px-8 py-2 border-none outline-none"
              />

              <div className="flex justify-center items-center">
                <p></p>
              </div>

              <span
                className="material-symbols-outlined text-2xl cursor-pointer text-white 
               rounded-full p-1 float-right "
               onClick={handleSearch}
              >
                search
              </span>
            </div>

            <div className="text-center text-white font-semibold my-5">
              <p>{weather.name},{weather.sys && weather.sys.country}</p>
              <p>{weather.weather && weather.weather[0].description}</p>
            </div>

            <>
              <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                <p>Temp</p>
                <p>{weather.main && weather.main.temp}°C</p>
              </div>
              <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                <p>Visibility</p>
                <p>{weather.visibility} Km</p>
              </div>
              <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                <p>Wind Speed</p>
                <p>{weather.wind && weather.wind.speed} meter/sec</p>
              </div>
            </>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Weather;
