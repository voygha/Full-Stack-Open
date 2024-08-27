import { useState } from 'react'
import './App.css'
import Person from './components/Person'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addRegister = (e) => {
    e.preventDefault()

    const nameExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())

    if (nameExists) {
      alert(`${newName} ya está en la lista!`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNumber('')
    alert('Registro añadido correctamente!')
  }

  const nameHandleOnChange = (e) => {
    setNewName(e.target.value)
  }

  const numberHandleOnChange = (e) => {
    setNumber(e.target.value)
  }

  const filterHandleOnChange = (e) => {
    setFilter(e.target.value)
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <>
      <h2>Phonebook</h2>
      <input
        value={filter}
        onChange={filterHandleOnChange}
        placeholder="Buscar por nombre"
      />
      <form onSubmit={addRegister}>
        <div>Name debug: {newName}</div>
        <div>Number debug: {newNumber}</div>
        <div>
          name:
          <input
            value={newName}
            onChange={nameHandleOnChange}
          />
        </div>

        <div>
          number:
          <input
            value={newNumber}
            onChange={numberHandleOnChange}
          />
        </div>

        <div>
          <button type='submit'>Add</button>
          <h2>Numbers</h2>
        </div>
        {personsToShow.length > 0 ? (
          personsToShow.map(
            person => (
              <Person key={person.id} person={person} />
            )
          )
        ) : (
          <p>No hay resultados</p>
        )}
      </form>
    </>
  )
}

export default App
