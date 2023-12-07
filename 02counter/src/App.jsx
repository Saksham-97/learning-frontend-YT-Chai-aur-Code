import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  const addValue = () => {
    if (counter < 10) {
      setCounter(counter + 1)
    }
  }
  const removeValue = () => {
    if (counter > 0)
      setCounter(counter - 1)
  }

  return (
    <>
      <div className="container">
        <div className="counterBox">
          <h1>Counter Project</h1>
          <h2>Counter Value: {counter}</h2>

          <button onClick={addValue}>Increase Value</button>

          <button onClick={removeValue}>Decrease Value</button>
        </div>
      </div>
    </>
  )
}

export default App
