
import Total from './components/Total'

import Course from './components/Course/Course'
// import { useState } from 'react'
// import Display from './components/Display'
// import Button from './components/Button'
// import History from "./components/History";
// import ButtonDirection from './components/ButtonDirection'

const App = () => {
  // const [counter, setCounter] = useState(0)
  //console.log('rendering...', counter)
  // const increaseByOne = () => {
  //   setCounter(counter + 1)
  // }
  // const decreaseByOne = () => setCounter(counter - 1)
  // const setToZero = () => setCounter(0)


  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)


  // const [allClicks, setAll] = useState([])

  // const [total, setTotal] = useState(0)


  // const handleLeftClick = () => {
  //   setAll(allClicks.concat('L'))
  //   const updatedLeft = left + 1
  //   setLeft(updatedLeft)
  //   setTotal(updatedLeft + right)
  // }

  // const handleRightClick = () => {
  //   setAll(allClicks.concat('R'))
  //   const updatedRight = right + 1
  //   setRight(updatedRight)
  //   setTotal(left + updatedRight)
  // }

  {/* Agrupamos todo en un unico objeto*/ }
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  //console.log(parts[0].exercises)
  return (
    <div>
      
      <Total parts={course.parts} />
      <Course name={course.name} parts={course.parts}/>


      {/* <Display counter={counter} />
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
        <ButtonDirection handleClick={handleLeftClick} text='left' />
        <ButtonDirection handleClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} total={total} />
      </div> */}


    </div>
  )
}

export default App