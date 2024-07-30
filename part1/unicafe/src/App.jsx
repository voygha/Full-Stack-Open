
import { useState } from 'react'
import './App.css'
import Stadistics from './components/Stadistics'
import Button from './components/Button'

function App() {


  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  //Condideremos que un buen comentario sumara 1, un mal comentario es -1  a la puntuacion total
  //tener el promedio de la suma de todos los comentarios
  const [avarage, setAvarage] = useState(0)
  // Este estado controlara el valor de la suma de la puntuacion total
  const [totalPoints, setTotalPoints] = useState(0)
  //No se utiliza el valor de total para evitar que la funcion asincrona no tenga el valor correcto al renderizar el componente
  const [contadorPromedio, setContadorProm] = useState(0)

  //Obtener el porcentaje de comentarios positivos
  const [possitivePercent, setPossitivePercent] = useState(0)

  const handleClickGood = () => {
    //Prevenir que la funcion asincrona no haga el conteo correcto
    const totalGood = good + 1
    setGood(totalGood)

    const contador = contadorPromedio + 1
    //Guardamos el valor correcto del contador
    setContadorProm(contador)

    //Un buen comentario suma 1 punto al total de los puntos acumulados
    const countPoints = totalPoints + 1
    //Se guarda el valor correcto de la puntuacion despues de la suma
    setTotalPoints(countPoints)

    //Toma el total de los puntos y lo divide entre el valor del contador
    //No podemos pasarle el valor de total porque no sabemos en que momento renderiza el componente y puede pasarle un valor anterior de total
    //Por ello usamos el estado del contador
    const totalAvarage = parseFloat(countPoints / contador).toFixed(3)
    setAvarage(totalAvarage)

    //Suma de todos los comentarios
    setTotal(totalGood + bad + neutral)

    const percentage = parseFloat((100 * totalGood) / contador).toFixed(2)
    setPossitivePercent(percentage)

  }

  const handleClickBad = () => {
    //Prevenir que la funcion asincrona no haga el conteo correcto
    const totalBad = bad + 1
    setBad(totalBad)

    const contador = contadorPromedio + 1
    setContadorProm(contador)

    //Un buen comentario resta 1 punto al total de los puntos acumulados
    const countPoints = totalPoints - 1
    //Se guarda el valor correcto de la puntuacion despues de la resta
    setTotalPoints(countPoints)

    const totalAvarage = parseFloat(countPoints / contador).toFixed(3)
    setAvarage(totalAvarage)

    //Suma de todos los comentarios
    setTotal(totalBad + good + neutral)

    const percentage = parseFloat((100 * good) / contador).toFixed(2)
    setPossitivePercent(percentage)
  }

  const handleClickNeutral = () => {
    //Prevenir que la funcion asincrona no haga el conteo correcto
    const totalNeutral = neutral + 1
    setNeutral(totalNeutral)

    const contador = contadorPromedio + 1
    setContadorProm(contador)

    const countPoints = totalPoints + 0
    setTotalPoints(countPoints)


    const totalAvarage = parseFloat(countPoints / contador).toFixed(3)
    setAvarage(totalAvarage)
    //Suma de todos los comentarios
    setTotal(totalNeutral + bad + good)

    const percentage = parseFloat((100 * good) / contador).toFixed(2)
    setPossitivePercent(percentage)
  }
  return (
    <>
      <h1>Give Feedback</h1>
      <div className="container-btns">
        <Button handleClick={handleClickGood} text='Good' classn='good' />
        <Button handleClick={handleClickNeutral} text='Neutral' classn='neutral' />
        <Button handleClick={handleClickBad} text='Bad' classn='bad' />
      </div>
      <Stadistics good={good}
        neutral={neutral} bad={bad} total={total}
        totalPoints={totalPoints} contadorPromedio={contadorPromedio}
        avarage={avarage} possitivePercent={possitivePercent} />
    </>
  )
}

export default App
