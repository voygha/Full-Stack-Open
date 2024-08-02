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
    

    // Validar si el nombre ya existe en el array persons
    const nameExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())

    if (nameExists) {
      console.log('valor repetido', newName)
      alert(`${newName} ya está en la lista!`)
      return // Salir de la función si el nombre ya existe
    }


    const personObject = {
      name: newName,
      id: persons.length + 1
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    console.log('Se guardó un nuevo nombre')
    alert('Nombre añadido correctamente!')
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