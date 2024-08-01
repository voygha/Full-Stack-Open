import { useState } from 'react'
import './App.css'
import Person from './components/Person'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Luis Alvarado' }
  ])
  const [newName, setNewName] = useState('')
  const addName = (e) =>{
    e.preventDefault()
    const personObject ={
      name:newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    console.log('Se guardo un nuevo nombre')
  }
  
  
  const handleOnChange = (e) =>{
    console.log(e.target.value)
    setNewName(e.target.value)
  }
  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>debug: {newName}</div>
        <div>
          name: 
          <input 
          value={newName}
          onChange={handleOnChange}
          />
        </div>
        <div>
          <button type='submit'>Add</button>
          <h2>Numbers</h2>
        </div>
          {persons.map(
            person => (
              <Person key={person.name} person={person} />
            )
          )}
      </form>
    </>
  )
}

export default App
