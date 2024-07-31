
import './App.css'

function App(props) {
  const { notes } = props

  return (
    <>
      <div>
        <h1>Notes</h1>
        <ul>
          <l1>{notes[0].content}</l1>
          <l1>{notes[1].content}</l1>
          <l1>{notes[2].content}</l1>
        </ul>
      </div>
    </>
  )
}

export default App
