
import './App.css'
import Note from './components/Note'
import { useState } from 'react'

function App(props) {
  const [notes, setNotes] =useState(props.notes)
  const [newNote, setNewNote] = useState('a new note... ')

  const addNote = (e) =>{
    e.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id:notes.length + 1
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
    console.log('button Clicked', e.target)
  }

  const handleNoteChange = (e) =>{
    console.log(e.target.value)
    setNewNote(e.target.value)
  }

  return (
    <>
      <div>
        <h1>Notes</h1>
        <ul>
          {notes.map(
            note =>
              <Note key={note.id} note={note} />
          )}
        </ul>
        <form onSubmit={addNote}>
          <input 
          value={newNote}
          onChange={handleNoteChange} />
          <button type='submit'>Save</button>
        </form>
      </div>
    </>
  )
}

export default App
