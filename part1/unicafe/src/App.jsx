
import { useState } from 'react'
import './App.css'

function App() {

  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClickGood = () => {
    //Prevenir que la funcion asincrona no haga el conteo correcto
    const totalGood = good + 1
    setGood(totalGood)
    setTotal(totalGood + bad + neutral)
  }
  const handleClickBad = () => {
    //Prevenir que la funcion asincrona no haga el conteo correcto
    const totalBad = bad + 1
    setBad(totalBad)
    setTotal(totalBad + good + neutral)
  }
  const handleClickNeutral = () => {
    //Prevenir que la funcion asincrona no haga el conteo correcto
    const totalNeutral = neutral + 1
    setNeutral(totalNeutral)
    setTotal(totalNeutral + bad + good)
  }
  return (
    <>
      <h1>Give Feedback</h1>
      <div className="container-btns">
        <button onClick={handleClickGood} className='good'>Good</button>
        <button onClick={handleClickNeutral} className='neutral'>Neutral</button>
        <button onClick={handleClickBad} className='bad'>Bad</button>
      </div>
      <div className="container-stadistics">
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
      </div>
    </>
  )
}

export default App
