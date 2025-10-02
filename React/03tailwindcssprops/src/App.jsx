import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  const [count, setCount] = useState(0)
let myObj = {
  name:"kanchan",
  age: 22,
}
let newArray = [1,2,3,4,5,6,7,8,9,10]
  return (
  <>
  <h2 className='bg-green-400 text-black mb-10' >hello I 'm kanchan</h2>
        {/* <Card channel = "kanchan" someobj = {newArray} /> */}
         {/* we can pass the object and array */}
         <Card username = "kanchan" btnText = "Click me" />
        <Card username = "Rose" btnText = "View "/>
  </> 
  )
}

export default App
