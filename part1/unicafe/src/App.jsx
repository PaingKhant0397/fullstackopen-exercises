import { useState } from 'react'


const Statistics = (props) => {
  const { good, neutral, bad, all, average, positive } = props;
  if (all == 0) {
    return <p>No feedback given</p>
  }
  return (
    <>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average.toFixed(1)} />
          <StatisticLine text="positive" value={positive.toFixed(1)} />
        </tbody>
      </table>
    </>

  )
}

const StatisticLine = (props) => {
  const { text, value } = props;
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = (props) => {
  const { onClick, text } = props
  return <button onClick={onClick}>{text}</button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)


  const result = (good * 1) + (neutral * 0) + (bad * (-1))

  let average = 0
  let positive = 0

  if (all != 0) {
    average = (result / all)
    positive = (good / all) * 100
  }

  const handleGood = () => {
    const newValue = good + 1
    setGood(newValue)
    setAll(all + 1)
  }

  const handleNeutral = () => {
    const newValue = neutral + 1;
    setNeutral(newValue);
    setAll(all + 1)
  }

  const handleBad = () => {
    const newValue = bad + 1;
    setBad(newValue);
    setAll(all + 1)
  }


  return (
    <div>
      <h1>give feedback</h1>

      <div>
        <Button text="good" onClick={handleGood} />
        <Button text="neutral" onClick={handleNeutral} />
        <Button text="bad" onClick={handleBad} />
      </div>

      <h1>statistics</h1>

      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />

    </div>
  )
}

export default App