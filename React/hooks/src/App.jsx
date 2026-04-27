import React, { useEffect, useState } from 'react'

const App = () => {
  const [change, setChange] = useState("");
  useEffect(() => {
    fetch("https://api.github.com/users/kanchankahar23")
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        setChange(data)
      })
  })
  return (
    <div>
      <h1>User name : {change.login}</h1>
    <img src={change.avatar_url} alt="" />
    </div>
  )
}

export default App