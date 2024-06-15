import { useState } from 'react'

const Anecdote = (props) => {
  const { text, votes } = props
  return (
    <div>
      <p>  {text}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotesList = [
    {
      'text': 'If it hurts, do it more often.',
      'votes': 0
    },
    {
      'text': 'Adding manpower to a late software project makes it later!',
      'votes': 0
    },
    {
      'text': 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'votes': 0
    },
    {
      'text': 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'votes': 0
    },
    {
      'text': 'Premature optimization is the root of all evil.',
      'votes': 0
    },
    {
      'text': 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'votes': 0
    }, {
      'text': 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      'votes': 0
    },
    {
      'text': 'The only way to go fast, is to go well.',
      'votes': 0
    },
  ]

  const [selected, setSelected] = useState(0)
  const [anecdotes, setAnecdotes] = useState(anecdotesList)

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * (max + 1))
  }

  const getMostVotesAnecdote = () => {
    let mostVoteIndex = 0;
    for (let i = 0; i < anecdotes.length; i++) {
      if (anecdotes[i].votes > anecdotes[mostVoteIndex].votes) {
        mostVoteIndex = i
      }
    }
    return mostVoteIndex
  }

  const handleNext = () => {
    const number = getRandomInt(anecdotes.length - 1)
    setSelected(number)
  }

  const handleVotes = () => {
    const newAnedotes = [...anecdotes]
    newAnedotes[selected].votes += 1;
    setAnecdotes(newAnedotes)
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <Anecdote text={anecdotes[selected].text} votes={anecdotes[selected].votes} />
      </div>

      <div>
        <button onClick={() => handleVotes()}>vote</button>
        <button onClick={() => handleNext()}>next anecdotes</button>
      </div>

      <div>
        <h1>Anecdote with the most votes</h1>
        <Anecdote text={anecdotes[getMostVotesAnecdote()].text} votes={anecdotes[getMostVotesAnecdote()].votes} />
      </div>

    </div>
  )
}

export default App