import React from 'react'

const Note = ({ note, toggleImportanceOf }) => {
  const label = note.important
    ? 'make note important' : 'make important'
  return (
    <li className='note'>
      {note.content}
      <button onClick={toggleImportanceOf}>{label}</button>
    </li>
  )
}

export default Note
