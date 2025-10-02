import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// learning Hook useState()


function App() {
  let [counter, setCounter] = useState(12)
  // let counter = 12;
  const addvalue = () => {
    // console.log("clicked" , useState(12))
    if (counter < 20) {
      setCounter(counter + 1)                                //for updation
    }
    else {
      console.log("stop")
    }
    // console.log("clicked" ,counter)
  }
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)                                  //for remove
    }
    else{
      console.log("error")
    }

  }

  return (
    <>
      <h1>chai aur react</h1>
      <h3>counter value : {counter}</h3>
      <button onClick={addvalue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value : {counter}</button>
    </>
  )
}

export default App
