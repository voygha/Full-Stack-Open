import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const course = 'Half Stack application development'
  {/* Agrupar las constantes en un arreglo */ }
  {/* En lugar de ser 3 Constantes ahora es solo una */ }
  const parts = [
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
  //console.log(parts[0].exercises)
  return (
    <div>
      <Header course={course} />
      {/* A nuestro componente ahora solo le pasamos un valor que es el array*/}
      <Content parts ={parts} />
      <Total parts ={parts} />
    </div>
  )
}

export default App