import { useState } from 'react'
import './index.css'

function App() {
  const [color, setColor] = useState("pink")
  return (
    <>

      <div style={{ backgroundColor: color }}>
        <button onClick={() => setColor("red")}>red</button>
        <button onClick={() => setColor("black")}>black</button>
        <button onClick={() => setColor("green")}>green</button>
        <button onClick={() => setColor("brown")}>brown</button>
        <button onClick={() => setColor("blue")}>blue</button>
        <button onClick={() => setColor("grey")}>grey</button>
        <button onClick={() => setColor("yellow")}>yellow</button>

      </div>

    </>



  )
}

export default App
