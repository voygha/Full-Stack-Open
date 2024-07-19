import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'
import { useState } from 'react' 
import Display from './components/Display'
import Button from './components/Button'

const App = () => {
  const [counter, setCounter] = useState(0)
  //console.log('rendering...', counter)
  const increaseByOne  = () => {
    setCounter(counter + 1)
  }
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  {/* Agrupamos todo en un unico objeto*/}
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
    </div>
  )
}

export default App