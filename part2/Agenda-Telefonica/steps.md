# Agenda Telefonica

Crearemos una agenda telefonica.

Primero vamos a implementar la adicion de una persona a la agenda.

Usaremos el siguiente codigo base:

Vamos a `/src/app.jsx`

```typescript
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App
```

El estado de newName está destinado a controlar el elemento input del formulario.

A veces puede resultar útil representar el estado y otras variables como texto con fines de depuración. Puedes agregar temporalmente el siguiente elemento al componente renderizado:

```typescript
<div>debug: {newName}</div>
```

A partir de aqui ya deberia mostrar un registro y deberias poder guardar datos al objeto.


## Ejercicio 2.6 Guardar un nombre

```typescript
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

```

## 2.7 Evitar que el usuario pueda agregar nombres que ya existen en la agenda

Tenemos que mandar una alerta cuando el usuario quiera registrar un nombre existente.

Antes de guardar en el objeto el nombre hay que revisar que no exista recorriendo el arreglo con el metodo some


Agregaremos las siguientes lineas de codigo para controlar que no se agregen duplicados
```typescript
// Validar si el nombre ya existe en el array persons
    const nameExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())

    if (nameExists) {
      console.log('valor repetido', newName)
      alert(`${newName} ya está en la lista!`)
      return // Salir de la función si el nombre ya existe
    }
```

```typescript
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

```
