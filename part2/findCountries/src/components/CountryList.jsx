import React from 'react'
import Country from './Country'


const CountryList = ({ countries, handleShow }) => {


  return (
    <ul>
      {countries?.map((country, index) => {
        return (
          <Country key={index} name={country.name} handleShow={() => handleShow(country)} />
        )
      })}
    </ul>
  )
}

export default CountryList