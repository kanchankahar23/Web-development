import { useState } from 'react'
import './index.css'

function App() {

  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>Counter </h1>
        <h1>{count}</h1>
        <div id='container'>
          <button onClick={() => {
            if (count <= 10) {
              setCount(prev => prev + 1)
            }
          }}
          >increment</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => {
            if (count < 0) {
              setCount(prev => prev - 1)
            }

          }
          }>decrement</button>

        </div>

      </div>
    </>
  )
}

export default App
