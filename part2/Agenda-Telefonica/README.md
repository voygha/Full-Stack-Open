# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Explicacion de la Aplicacion

Ejercicios 2.6.-2.10.
Este es un nuevo ejercicio que comenzaremos a trabajar en una aplicación que se continuará desarrollando en los ejercicios posteriores. 

2.6: La Agenda Telefónica Paso 1
Creemos una agenda telefónica sencilla. En esta parte solo agregaremos nombres a la agenda.

Comencemos por implementar la adición de una persona a la agenda.

Puedes utilizar el siguiente código como punto de partida para el componente App de tu aplicación:

```react
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