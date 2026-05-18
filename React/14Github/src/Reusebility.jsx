import React from 'react'

const Reusebility = () => {
  const data = [
    {
      name: "kanchan",
      des: "software Engineer",
      age: 22,
    },
    {
      name: "Shourya",
      des: "businessman",
      age: 22,
    },
    // {
    //   name: "kashish",
    //   des: "singer",
    //   age: 21,
    // },
    // {
    //   name: "kushal",
    //   des: "badminton player",
    //   age: 15,
    // },
    // {
    //   name: "twinkle",
    //   des: "business",
    //   age: 22,
    // },


  ]
  return (
    <>
      {data.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
            <h1>{item.des}</h1>
            <p>{item.age}</p>
          </div>
        )
      })}
    </>
  )
}

export default Reusebility