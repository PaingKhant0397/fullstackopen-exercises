import React from 'react'

const Search = ({ query, onQueryChange }) => {
  return (
    <div>
      <p>find countries <input value={query} onChange={onQueryChange} /></p>
    </div>
  )
}

export default Search