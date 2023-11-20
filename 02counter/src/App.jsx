import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  //   this is , this is
  //   variable, method

  // let counter = 10
  
  const addValue = () => {
    // console.log("Value Added", Math.random())
    // console.log("Cliked", Math.random())
    // console.log("Cliked", counter)
    // counter = counter + 1;
    // setCounter(counter + 1)

    if (counter <= 9) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {

    if (counter >= 1) {
      setCounter(counter - 1)
    }


    // setCounter(counter - 1)
  }

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer {counter}</p>
    </>
  )
}

export default App
