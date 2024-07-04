import { useState, useEffect } from 'react'
import Search from './components/Search'
import countryServices from './services/county'
import weatherServices from "./services/weather"
import CountryList from './components/CountryList'
import CountryView from './components/CountryView'
import Weather from './components/Weather'

function App() {
  const [query, setQuery] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [matchedCountry, setMatchedCountry] = useState()
  const [weather, setWeather] = useState()



  useEffect(() => {
    countryServices
      .getAll()
      .then(allCountry => {
        setAllCountries(allCountry)
      })
  }, [])

  useEffect(() => {
    if (matchedCountry) {
      const latlng = matchedCountry.latlng
      const lat = latlng[0]
      const lon = latlng[1]
      weatherServices
        .getSingleWeather(lat, lon)
        .then(weather => setWeather(weather))
    }

  }, [matchedCountry])


  useEffect(() => {
    if (query === '') {
      setFilteredCountries([])
      setMatchedCountry()
      setWeather()
      return
    }

    const searchResult = allCountries.filter((country) => {
      return (
        country.name.common.toLowerCase().includes(query.toLowerCase())
        || country.name.official.toLowerCase().includes(query.toLowerCase())
      )
    })
    if (searchResult.length === 1) setMatchedCountry(searchResult[0])
    if (searchResult.length > 1) {
      setWeather()
      setMatchedCountry()
    }
    setFilteredCountries(searchResult)
  }, [query])


  const handleQueryChange = (e) => {
    const queryText = e.target.value
    setQuery(queryText)
  }

  const handleShow = (country) => {
    setMatchedCountry(country)
  }

  return (
    <>
      <Search query={query} onQueryChange={handleQueryChange} />

      {allCountries.length === 0 && (
        <p>Fetching countries, please wait ...</p>
      )}
      <CountryView countries={filteredCountries} matchedCountry={matchedCountry} handleShow={handleShow} />
      <Weather weather={weather} capital={matchedCountry?.capital[0]} />
    </>
  )
}

export default App
