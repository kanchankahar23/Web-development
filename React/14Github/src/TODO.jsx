import React, { useState } from 'react'

const TODO = () => {
    const [todos, setTodos] = useState([]);
    const [inp,setInp] = useState("")
    const addTodo = (text) => {
        console.log("clicked")
        setTodos([...todos, { id: Date.now(), text, done: false }])
    }
    return (
        <div>
            <input
             placeholder='add todo'
             value={inp} />
            <button onClick={addTodo}>Add</button>
            {todos.map(todo => {
                return(
                <div key={todo.id}>
                    {todo.text}
                </div>
                )
            })}
        </div>
    )
}

export default TODO