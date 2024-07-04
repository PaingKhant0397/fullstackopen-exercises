import React from 'react'

const Country = ({ name, handleShow }) => {
  return (
    <li>{name.common} <button onClick={handleShow}>show</button></li>
  )
}

export default Country