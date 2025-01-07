import { useState, useEffect } from 'react';
import './App.css';
import Person from './components/Person';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import axios from 'axios';

// npx json-server --port 3001 --watch db.json

function App() {
  const [persons, setPersons] = useState([]); // Inicializamos como un array vacío
  const [newName, setNewName] = useState('');
  const [newNumber, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons') // URL del servidor JSON
      .then((response) => {
        setPersons(response.data); // Actualizamos el estado con los datos obtenidos
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
      });
  }, []); // Solo se ejecuta una vez, al montar el componente

  const addRegister = (e) => {
    e.preventDefault();

    const nameExists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (nameExists) {
      alert(`${newName} ya está en la lista!`);
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };

    // Añadimos el nuevo registro al servidor JSON
    axios
      .post('http://localhost:3001/persons', personObject)
      .then((response) => {
        setPersons(persons.concat(response.data)); // Actualizamos el estado con el nuevo registro
        setNewName('');
        setNumber('');
        alert('Registro añadido correctamente!');
      })
      .catch((error) => {
        console.error('Error al añadir el registro:', error);
      });
  };

  const nameHandleOnChange = (e) => {
    setNewName(e.target.value);
  };

  const numberHandleOnChange = (e) => {
    setNumber(e.target.value);
  };

  const filterHandleOnChange = (e) => {
    setFilter(e.target.value);
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h2>Phonebook</h2>
      <Filter filter={filter} filterHandleOnChange={filterHandleOnChange} />

      <PersonForm
        addRegister={addRegister}
        newName={newName}
        newNumber={newNumber}
        nameHandleOnChange={nameHandleOnChange}
        numberHandleOnChange={numberHandleOnChange}
      />

      {personsToShow.length > 0 ? (
        personsToShow.map((person) => <Person key={person.id} person={person} />)
      ) : (
        <p>No hay resultados</p>
      )}
    </>
  );
}

export default App;
