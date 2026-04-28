import React, { useRef, useState } from 'react'
import './index.css'

const App = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return; // prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // DOM access
  const inputRef = useRef(null);
  const focus = () => inputRef.current.focus();

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>

      <br /><br />

      <input ref={inputRef} />
      <button onClick={focus}>Focus karo</button>
    </div>
  )
}

export default App;