import React from 'react'

const Weather = ({ capital, weather }) => {
  if (!weather || !capital) return null
  console.log("weather is ", weather)
  const imgUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`


  return (
    <>
      <h1>Whather in {capital}</h1>
      <p>temperature {weather.main.temp}</p>
      <img src={imgUrl} weight={150} height={150} />
      <p>wind {weather.wind.speed}</p>
    </>
  )
}

export default Weather