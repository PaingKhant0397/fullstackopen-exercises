import React from 'react'
import CountryList from './CountryList'
import CountryDetail from './CountryDetail'

const CountryView = ({ countries, matchedCountry, handleShow }) => {

  if (countries.length > 10) return <p>Too many matches, specify another filter</p>

  if (matchedCountry) return <CountryDetail country={matchedCountry} />

  return (
    <>
      <CountryList countries={countries} handleShow={handleShow}></CountryList>
    </>
  )
}

export default CountryView