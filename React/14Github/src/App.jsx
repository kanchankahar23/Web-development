import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const handleincrease = () => {
    if (count < 10) {
      setCount(prev => prev + 1)
    }
  }
  const handledecrese = () => {
    if (count > 0) {
      setCount(prev => prev - 1)
    }
  }
  return (

    <>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={handleincrease}>increase</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={handledecrese}>decrese</button>
      </div>

    </>
  )
}

export default App
