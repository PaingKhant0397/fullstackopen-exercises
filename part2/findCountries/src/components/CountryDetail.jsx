import React from 'react'

const CountryDetail = ({ country }) => {
  // console.log("country language", country.languages[0])
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>

      <h1>Languages</h1>

      <ul>
        {Object.entries(country.languages).map(([code, name]) => {
          return <li key={code}>{name}</li>
        })}
      </ul>

      <img src={country.flags.png} width={150} height={150} />
    </>
  )
}

export default CountryDetail