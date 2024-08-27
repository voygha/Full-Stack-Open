# Agenda Telefonica

Crearemos una agenda telefonica.

Primero vamos a implementar la adicion de una persona a la agenda.

Usaremos el siguiente codigo base:

Vamos a `/src/app.jsx`

```typescript
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

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
  );
};

export default App;
```

El estado de newName está destinado a controlar el elemento input del formulario.

## Ejercicio 2.6 Guardar un nombre

A partir de aqui deberias poder guardar datos al objeto.

Antes de eso, necesitaremos una funcion `handleOnChange` la cual se encargara de setear en el estado el valor del input que deposite el usuario, y tambien nos servira para debuguear

```typescript
const handleOnChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };
```
A veces puede resultar útil representar el estado y otras variables como texto con fines de depuración. Puedes agregar temporalmente el siguiente elemento al componente renderizado:

```typescript
<div>debug: {newName}</div>
```

Agregaremos la funcion `addName` la cual se encargara de guardar el estado del nombre que tengamos en el onChange del formulario

Para esto, en el onSubmit del formulario vamos a agregar nuestra funcion que se encargara de guardar los datos

```typescript
{/* Funcion del onSubmit */}
<form onSubmit={addName}>
    <div>debug: {newName}</div>
    <div>
        name:
        <input value={newName} onChange={handleOnChange} />
    </div>
    <div>
        <button type="submit">Add</button>
        <h2>Numbers</h2>
    </div>
    {persons.map((person) => (
        <Person key={person.name} person={person} />
    ))}
</form>
```

Ahora vamos a crear la funcion que se encargara de agregar el nombre a nuestra guia telefonica:

```typescript
const addName = (e) => {
    e.preventDefault();
    
    //Crea un objeto donde se guarda el nuevo registro
    const personObject = {
      name: newName,
      id: persons.length + 1,
    };

    //Esto se guarda en nuestra constante Persons
    setPersons(persons.concat(personObject));
    //Reseteamos el nombre
    setNewName("");
    console.log("Se guardó un nuevo nombre");
    alert("Nombre añadido correctamente!");
  };
```

El codigo completo hasta este paso se veria de la siguiente forma:

```typescript
// /src/App.jsx
import { useState } from "react";
import "./App.css";
import Person from "./components/Person";

function App() {
  const [persons, setPersons] = useState([{ name: "Luis Alvarado" }]);
  const [newName, setNewName] = useState("");

  const addName = (e) => {
    e.preventDefault();

    const personObject = {
      name: newName,
      id: persons.length + 1,
    };

    setPersons(persons.concat(personObject));
    setNewName("");
    console.log("Se guardó un nuevo nombre");
    alert("Nombre añadido correctamente!");
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };
  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>debug: {newName}</div>
        <div>
          name:
          <input value={newName} onChange={handleOnChange} />
        </div>
        <div>
          <button type="submit">Add</button>
          <h2>Numbers</h2>
        </div>
        {persons.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </form>
    </>
  );
}

export default App;
```

## 2.7 Evitar que el usuario pueda agregar nombres que ya existen en la agenda

Tenemos que mandar una alerta cuando el usuario quiera registrar un nombre existente.

Antes de guardar en el objeto el nombre hay que revisar que no exista recorriendo el arreglo con el metodo some

Agregaremos las siguientes lineas de codigo para controlar que no se agregen duplicados

```typescript
// Validar si el nombre ya existe en el array persons
const nameExists = persons.some(
  (person) => person.name.toLowerCase() === newName.toLowerCase()
);

if (nameExists) {
  console.log("valor repetido", newName);
  alert(`${newName} ya está en la lista!`);
  return; // Salir de la función si el nombre ya existe
}
```

Hasta este punto ya podriamos guardar un registro, sin embargo no estaria disponible en nuestra UI, aun nos falta mostrar los datos que estamos guardando, en este caso el nombre.

Para esto, dentro de la carpeta `src` crearemos la carpeta `components`, dentro crearemos nuestro primer componente al cual llamaremos `Person.jsx` aqui manejaremos la informacion de la persona que esta registrada en la agenda telefonica.

Necesitamos recorrer nuestra Constante Person la cual esta declarada ya con un estado inicial
Para ello, utilizaremos la funcion map

Como key vamos a pasarle el nombre, que para este ejemplo no se puede repetir, sin embargo es una mala practica hacer esto, simpre que se pueda hay que evitar esta practica.

```typescript
{persons.map((person) => (
    <Person key={person.name} person={person} />
))}
```
En nuestra `App.jsx` tendremos que importar nuestro componente Person de la carpeta components 

```typescript
import Person from "./components/Person";
```

Si desplegamos nuestro servidor de desarrrollo en este punto tendriamos un error, pues aun no hemos configurado nuestro componente Person para usarlo.

El codigo completo de `App.jsx` hasta este punto se veria asi:

```typescript
// /src/App.jsx
import { useState } from "react";
import "./App.css";
import Person from "./components/Person";

function App() {
  const [persons, setPersons] = useState([{ name: "Luis Alvarado" }]);
  const [newName, setNewName] = useState("");

  const addName = (e) => {
    e.preventDefault();

    // Validar si el nombre ya existe en el array persons
    const nameExists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (nameExists) {
      console.log("valor repetido", newName);
      alert(`${newName} ya está en la lista!`);
      return; // Salir de la función si el nombre ya existe
    }

    const personObject = {
      name: newName,
      id: persons.length + 1,
    };

    setPersons(persons.concat(personObject));
    setNewName("");
    console.log("Se guardó un nuevo nombre");
    alert("Nombre añadido correctamente!");
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };
  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>debug: {newName}</div>
        <div>
          name:
          <input value={newName} onChange={handleOnChange} />
        </div>
        <div>
          <button type="submit">Add</button>
          <h2>Numbers</h2>
        </div>
        {persons.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </form>
    </>
  );
}

export default App;
```
### Componente Person
Vamos a trabajar nuestro componente `/src/components/Person.jsx`

```typescript
const Person = ({person}) =>{
    return(
        {/* De momento  solo renderizamos el nombre que es lo que ya guardamos*/}
        <p>{person.name}</p>
    )
}

export default Person
```


## 2.8 Permitir agregar numeros de telefono dentro de la agenda


Aqui vamos a modificar el codigo base, primero renombrare la funcion `addName` ahora se llamara `addRegister`, debido a que ya no solo vamos a guardar el nombre, si no , tambien el numero de telefono.

Para guardar el numero de telefono usaremos un nuevo estado el cual sera el siguiente:

```typescript
const [newNumber, setNumber] = useState('')
```

El OnChange del name tambien vamos a cambiar el nombre de la funcion el `handleOnChange` funcion que guardaba la entrada del usuario ahora se llamara `nameHandleOnChange` debido a que esta funcion va a detectar cualquier cambio dentro del valor del name y lo va a estar seteando cada que haya una entrada.

Agregaremos otro OnChange, el cual se va a encargar de setear el valor cada que entre un dato en el formulario en el input correspondiente para el numero de telefono, esta funcion se llamara `numberHandleOnChange` y se encargara de setear los datos del numero

Primero renombramos `handleOnChange` a `nameHandleOnChange` de la siguiente forma:

```typescript
const nameHandleOnChange = (e) => {
  console.log(e.target.value);
  setNewName(e.target.value);
};
```

Creamos la segunda funcion para el numero

```typescript
const numberHandleOnChange = (e) => {
  console.log(e.target.value);
  setNumber(e.target.value);
};
```

Ahora dentro de los inputs correspondientes vamos a agregar sus diferentes metodos onChange y en el value el estado correspondiente para cada dato

```typescript
<div>
    name:
    <input
    value={newName}
    onChange={nameHandleOnChange}
    />
</div>

<div>
    name:
    <input
    value={newNumber}
    onChange={numberHandleOnChange}
    />
</div>
```

Dentro de la funcion `addRegister` despues de validar que el usuario no este registrado con anterioridad, vamos a guardar en el objeto Person el valor del numero, ademas del nombre que ya guardabamos y tenemos que resetear el estado del numero despues de guardar el valor.

Lo haremos de la siguiente forma:

```typescript
 const personObject = {
      name: newName,
      //Se guarda el numero
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    //reseteamos el valor del numero
    setNumber('')
```

Actualmente nuestro codigo completo del App.jsx estaria de la siguiente forma:

```typescript
import { useState } from 'react'
import './App.css'
import Person from './components/Person'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Luis Alvarado' }
  ])
  const [newName, setNewName] = useState('')

  const [newNumber, setNumber] = useState('')

  const addRegister = (e) => {
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
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNumber('')
    console.log('Se guardó un nuevo registro')
    alert('Registro añadido correctamente!')
  }


  const nameHandleOnChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const numberHandleOnChange = (e) => {
    console.log(e.target.value)
    setNumber(e.target.value)
  }

  
  return (
    <>
      <h2>Phonebook</h2>
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
          name: 
          <input 
          value={newNumber}
          onChange={numberHandleOnChange}
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

Hasta este punto ya funciona nuestra aplicacion, sin embargo aun no se muestra el valor del numero, esto porque tenemos que actualizar nuestro componente `Person.jsx`

Vamos a `/src/components/Person.jsx`

Y vamos a darle un poco mas de formato y estilos tambien.


Lo unico que se agrego es `{person.number}`

Todo lo demas son clases que nos serviran para darle un poco de estilos a nuestra aplicacion y hacer que nuestros registros no esten pegados unos con otros sobre la misma linea.


```typescript
const Person = ({ person }) => {
    return (
        <>
            <div className="container cont-guia">
                <div className="row row-information">
                    <div className="col-name">
                    {person.name}
                    </div>
                    <div className="col-number">
                    {person.number}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Person
```


Si les interesa el Css es el siguiente:

```css
.cont-guia{
  display: flex;
  justify-content: center;
  align-items: center;
}

.row-information{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.col-name{
  width: 220px;
}
```
