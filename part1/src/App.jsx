import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'
import { useState } from 'react'
import Display from './components/Display'
import Button from './components/Button'

const App = () => {
  const [counter, setCounter] = useState(0)
  //console.log('rendering...', counter)
  const increaseByOne = () => {
    setCounter(counter + 1)
  }
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)


  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)


  const [allClicks, setAll] = useState([])

  const [total, setTotal] = useState(0)


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  {/* Agrupamos todo en un unico objeto*/ }
  const course = {
    name: 'Half Stack application development',
    /* Agrupar las constantes en un arreglo */
    /* En lugar de ser 3 Constantes ahora es solo una */
    parts: [
      // Agrupar por objetos dentro del array
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  //console.log(parts[0].exercises)
  return (
    <div>
      {/* Al Header unicamente le pasamos destructurado el titulo como parametro para no pasarle todo el objeto*/}
      {/* Al final lo que nos interesa para el Header sera el nombre del curso */}
      <Header course={course.name} />
      {/* Lo mismo pasa con contenido y con total, lo que nos interesa pasarle a los componentes solo es el array de parts dentro del objeto course*/}
      {/* A nuestro componente ahora solo le pasamos un valor que es el array*/}
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Display counter={counter} />



      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />
      <Button
        onClick={decreaseByOne}
        text='minus'
      />
      <br />
      <br />
      <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
      </div>


    </div>
  )
}

export default App