import axios from "axios"

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const api_key = import.meta.env.VITE_API_KEY

//0c22351ed17d1fdf767e36319e07d278


const getSingleWeather = (lat, lon) => {
  const request = axios.get(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${api_key}`)
  return request.then(response => response.data)
}

export default ({ getSingleWeather })