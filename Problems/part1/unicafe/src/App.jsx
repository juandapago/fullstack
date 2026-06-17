import { useState } from 'react'

const Button = (props) => <button onClick = {props.onClick}>{props.text}</button>
const StatisticLine = (props) => <tr><td>{props.text}</td> <td>{props.value}</td></tr>

const Statistics = (props) => {
  if (props.total === 0){
    return (<p>No feedback given</p>)
  }

  console.log('redirigiendo')
  return(
    <table>
      <tbody>
        <StatisticLine value = {props.good} text = 'Good'/>
        <StatisticLine value = {props.neutral} text = 'Neutral'/>
        <StatisticLine value = {props.bad} text = 'Bad'/>
        <StatisticLine value = {props.total} text = 'All'/>
        <StatisticLine value = {props.averague} text = 'Averague'/>
        <StatisticLine value = {props.positive} text = 'Positive'/>
      </tbody>
    </table>
  )
  
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const averague = total === 0 ? 0 : (good-bad) / total 
  const positive = total === 0 ? 0 : (good/total) * 100

  const increaseGood = () =>{
    console.log('Incrementando feedback good')
    setGood(good + 1)
  }

  const increaseNeutral = () =>{
    console.log('Incrementando feedback neutral')
    setNeutral(neutral + 1)
  }

  const increaseBad = () =>{
    console.log('Incrementando feedback bad')
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick = {increaseGood} text = 'Good'/>
      <Button onClick = {increaseNeutral} text = 'Neutral'/>
      <Button onClick = {increaseBad} text = 'Bad'/>
      <h2>Statistics</h2>
      <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total} averague = {averague} positive = {positive}/>
    </div>
  )
}

export default App